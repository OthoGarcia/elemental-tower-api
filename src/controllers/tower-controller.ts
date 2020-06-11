import { controller, httpGet, request, response } from "inversify-express-utils";
import * as express from 'express';

@controller('/tower')
export class TowerController {
  constructor() {
    
  }

  @httpGet('/')
  async create(
    @request() req: express.Request,
    @response() res: express.Response,
  ){

    return res.send('teste 3')

  }
}