import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';

import { Orphanage } from '../models/Orphanage';

export default {
  
  async index(request: Request, reponse: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const orphanages = await orphanagesRepository.find();
    return response.json(orphanages);
  },

  async show(request: Request, reponse: Response) {
    const { id } = request.params;
    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = await orphanagesRepository.findOneOrFail(id);
    return response.json(orphanage);
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekeends
    } = request.body;
    
    const orphanagesRepository = getRepository(Orphanage);
  
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekeends
    });
  
    await orphanagesRepository.save(orphanage);
  
    return response.status(201).json(orphanage);
  }
};
