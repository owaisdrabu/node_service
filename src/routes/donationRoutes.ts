import express from 'express';
import { DonationController } from '../controllers/donationController';

export class DonationRoutes {
  public router = express.Router();
  private donationController = new DonationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/donate', this.donationController.recordDonation);
    this.router.get('/getdonations', this.donationController.getDonation);
  }
}
