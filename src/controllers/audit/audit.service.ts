import logger from '../../services/logger';

import { INTERNAL_SERVER_ERROR } from '../../constants';
import {
  createFailureResponse,
  createSuccessResponse,
} from '../../interfaces/response';
import CreateAuditDto from './dto/createAudit.dto';

class AuditService {
  public async createAudit({
    userId,
    eventType,
    level,
    createdBy,
  }: CreateAuditDto) {
    try {
      logger.info(
        `[${level}] Creating audit for ${userId} by ${createdBy} - ${eventType}`
      );
      return createSuccessResponse('OK');
    } catch (e) {
      logger.error(e);
      return createFailureResponse(500, INTERNAL_SERVER_ERROR);
    }
  }
}

export default AuditService;
