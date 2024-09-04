import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { MasterService } from './master.service';

@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Get('plans')
  getPlans(@Query('id') id?: number) {
    return this.masterService.getPlans(id ? Number(id) : undefined);
  }

  @Get('premium/:id')
  getPremiumByPlanId(
    @Param('id') id: number,
    @Query('gender') gender: string,
    @Query('age') age: number
  ) {
    return this.masterService.getPremiumByPlanId(Number(id), gender, Number(age));
  }

  @Get('benefits/:id')
  getBenefitByPlanId(@Param('id') id: number) {
    return this.masterService.getBenefitByPlanId(Number(id));
  }

  @Post('quote')
  createQuote(@Body() request: { name: string; age: number; gender: string; maritalStatus: string }) {
    const { name, age, gender, maritalStatus } = request;

    const plans = this.masterService.getPlans();

    const response = plans.map(plan => {
      const premiums = this.masterService.getPremiumByPlanId(plan.plan_id, gender, age);
      return {
        plan_id: plan.plan_id,
        plan_name: plan.plan_name,
        premium_cost: premiums.length > 0 ? premiums[0].premium : null,
      };
    });

    return { name, age, gender, maritalStatus, availablePlans: response };
  }
}
