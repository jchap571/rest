import { dbContext } from "../db/DbContext.js";

class MissionsService {
  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('rat', 'name')
    await mission.populate('location')
    return mission
  }
  async getMissions() {
    const missions = await dbContext.Missions.find().populate('rat', '-name -picture').populate('location')
    return missions
  }




}


export const missionsService = new MissionsService()