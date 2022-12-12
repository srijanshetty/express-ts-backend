import express from 'express';
import Controller from '../../interfaces/controller.interface';

import { AUDIT_API } from '../../path';

import validationMiddleware from '../../middleware/validation.middleware';
import CreateAuditDto from './dto/createAudit.dto';

import AuditService from './audit.service';

class AuditController implements Controller {
  public router = express.Router();
  public auditService = new AuditService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
     * POST /audit/create
     * @tag audit
     * @summary Create audit
     * @description Create audit
     * @operationId createAudit
     * @response 200 - successful operation
     * @responseContent {string} 200.application/json
     */
    this.router.post(
      `${AUDIT_API}`,
      validationMiddleware(CreateAuditDto),
      this.createAudit
    );
  }

  private createAudit = async (
    request: express.Request,
    response: express.Response
  ) => {
    const payload = request.body as CreateAuditDto;
    response.send(await this.auditService.createAudit(payload));
  };
}

export default AuditController;
