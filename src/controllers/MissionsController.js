import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";



export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getMissions)
      .put('/:ratId', this.createMission)

  }
  async getMissions(request, response, next) {
    try {
      const missions = await missionsService.getMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }



  async createMission(request, response, next) {
    try {
      const mission = await missionsService.createMission()
      response.send(mission)

    } catch (error) {
      next(error)
    }

  }


}