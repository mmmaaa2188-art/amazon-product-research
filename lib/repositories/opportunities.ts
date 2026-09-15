import { opportunities } from "@/lib/mock-data";
import { ProductOpportunity } from "@/types/product";

export interface OpportunityRepository {
  list(): Promise<ProductOpportunity[]>;
  findById(id: string): Promise<ProductOpportunity | null>;
}

class MockOpportunityRepository implements OpportunityRepository {
  async list() { return opportunities; }
  async findById(id: string) { return opportunities.find((item) => item.id === id) ?? null; }
}

// Replace this implementation with SupabaseOpportunityRepository when credentials are configured.
export const opportunityRepository: OpportunityRepository = new MockOpportunityRepository();
