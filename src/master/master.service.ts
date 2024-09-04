import { Injectable } from '@nestjs/common';

@Injectable()
export class MasterService {
  private plans = [
    { plan_id: 1, plan_name: 'Silver' },
    { plan_id: 2, plan_name: 'Gold' },
    { plan_id: 3, plan_name: 'Diamond' },
    { plan_id: 4, plan_name: 'Classic' },
  ];

  private premiums = [
    { plan_id: 1, gender: 'Male', from_age: 18, to_age: 25, premium: 100 },
    { plan_id: 1, gender: 'Female', from_age: 18, to_age: 25, premium: 90 },
    { plan_id: 2, gender: 'Male', from_age: 26, to_age: 35, premium: 150 },
    { plan_id: 2, gender: 'Female', from_age: 26, to_age: 35, premium: 140 },
  ];

  private benefits = [
    { plan_id: 1, benefit_id: 101, description: 'Hospital Coverage' },
    { plan_id: 1, benefit_id: 102, description: 'Dental Coverage' },
    { plan_id: 2, benefit_id: 201, description: 'Vision Coverage' },
    { plan_id: 2, benefit_id: 202, description: 'Accident Coverage' },
    { plan_id: 3, benefit_id: 301, description: 'Maternity Coverage' },
    { plan_id: 4, benefit_id: 401, description: 'Wellness Program' },
  ];

  getPlans(planId?: number) {
    if (planId) {
      return this.plans.filter(plan => plan.plan_id === planId);
    }
    return this.plans;
  }

  getPremiumByPlanId(planId: number, gender: string, age: number) {
    return this.premiums.filter(
      premium =>
        premium.plan_id === planId &&
        premium.gender === gender &&
        age >= premium.from_age &&
        age <= premium.to_age
    );
  }

  getBenefitByPlanId(planId: number) {
    return this.benefits.filter(benefit => benefit.plan_id === planId);
  }
}
