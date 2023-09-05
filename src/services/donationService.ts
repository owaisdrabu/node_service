export class DonationService {
  private donations: Map<number, number> = new Map<number, number>();
  private static instance: DonationService;

  constructor() {}

  public static getInstance(): DonationService {
    if (!DonationService.instance) {
      DonationService.instance = new DonationService();
    }
    return DonationService.instance;
  }

  public recordDonation(userId: number): number {
    this.donations.has(userId) ?  this.donations.set(userId, this.donations.get(userId)! + 1) :  this.donations.set(userId, 1); 
    return this.donations.get(userId)!;
  }

  public getDonation(userId: number): number {
    return this.donations.has(userId) ? this.donations.get(userId)! : 0    
  }
}
