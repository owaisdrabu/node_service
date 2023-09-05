import { Request, Response } from 'express';
import { SnsService } from '../services/snsService';
import { DonationService } from '../services/donationService';

export class DonationController {
  public async recordDonation(req: Request, res: Response): Promise<void> {
    try {
      const userId: number = req.body.userId;

      const snsService = new SnsService();

      const donationService = DonationService.getInstance();
      const totalDonations =  donationService.recordDonation(userId);

      if (totalDonations >= 2) {
        await snsService.sendThankYouMessage(userId);
      }

      res.status(200).json({ message: 'Donation recorded for userID ' + userId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getDonation(req: Request, res: Response): Promise<void> {
    try {
      const userId: number = req.body.userId;

      const donationService = DonationService.getInstance();
      const totalDonations = donationService.getDonation(userId);

      res.json({ message: `Total Donation recorded for userID ${userId} = ${totalDonations}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}



