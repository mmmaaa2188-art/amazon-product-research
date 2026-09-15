create extension if not exists "pgcrypto";

create type opportunity_status as enum ('Watching', 'Validating', 'Shortlisted', 'Rejected');

create table workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  marketplace text not null default 'US',
  created_at timestamptz not null default now()
);

create table research_projects (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  name text not null,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table product_opportunities (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references research_projects(id) on delete cascade,
  product_name text not null,
  keyword text not null,
  asin varchar(10),
  category text not null,
  price numeric(10,2) not null check (price >= 0),
  estimated_monthly_sales integer not null default 0,
  estimated_monthly_revenue numeric(12,2) not null default 0,
  review_count integer not null default 0,
  rating numeric(2,1) check (rating between 0 and 5),
  bsr integer,
  search_volume integer not null default 0,
  estimated_cpc numeric(8,2) not null default 0,
  product_cost numeric(10,2) not null default 0,
  shipping_cost numeric(10,2) not null default 0,
  fba_fee numeric(10,2) not null default 0,
  referral_fee numeric(10,2) not null default 0,
  net_profit numeric(10,2) not null default 0,
  profit_margin numeric(6,2) not null default 0,
  break_even_acos numeric(6,2) not null default 0,
  break_even_cpc numeric(8,2) not null default 0,
  demand_score smallint not null default 0 check (demand_score between 0 and 100),
  competition_score smallint not null default 0 check (competition_score between 0 and 100),
  profit_score smallint not null default 0 check (profit_score between 0 and 100),
  seasonality_score smallint not null default 0 check (seasonality_score between 0 and 100),
  opportunity_score smallint not null default 0 check (opportunity_score between 0 and 100),
  status opportunity_status not null default 'Watching',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(project_id, asin)
);

create table keyword_snapshots (
  id bigint generated always as identity primary key,
  opportunity_id uuid not null references product_opportunities(id) on delete cascade,
  keyword text not null,
  search_volume integer,
  estimated_cpc numeric(8,2),
  organic_rank integer,
  captured_at date not null default current_date,
  unique(opportunity_id, keyword, captured_at)
);

create table asin_snapshots (
  id bigint generated always as identity primary key,
  opportunity_id uuid not null references product_opportunities(id) on delete cascade,
  price numeric(10,2), estimated_monthly_sales integer, review_count integer,
  rating numeric(2,1), bsr integer, captured_at date not null default current_date,
  unique(opportunity_id, captured_at)
);

create index product_opportunities_score_idx on product_opportunities(project_id, opportunity_score desc);
create index product_opportunities_status_idx on product_opportunities(project_id, status);
create index keyword_snapshots_keyword_idx on keyword_snapshots(keyword, captured_at desc);

alter table workspaces enable row level security;
alter table research_projects enable row level security;
alter table product_opportunities enable row level security;
alter table keyword_snapshots enable row level security;
alter table asin_snapshots enable row level security;

-- Add membership-based RLS policies when Supabase Auth is introduced.
