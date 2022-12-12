import request from 'supertest';

import App from '../../../app';
import AuditController from '../audit.controller';

import EnvService from '../../../services/env';

import { AUDIT_API } from '../../../path';

EnvService.init();

describe('The AuditController', () => {
  describe(`POST ${AUDIT_API}`, () => {
    describe('validation should fail for invalid data', () => {
      it('response should be 200, with error', async () => {
        const auditController = new AuditController();

        const app = new App([auditController]);
        const response = await request(app.getServer())
          .post(`${AUDIT_API}`)
          .send({
            userId: 123,
            level: 'INFO',
          });

        expect(response.status).toBe(400);
      });
    });

    describe('success response for correct data', () => {
      it('response should be 200, with error', async () => {
        const auditController = new AuditController();
        const create = jest.fn().mockReturnValueOnce(Promise.resolve(null));

        // @ts-ignore
        auditController.auditService.auditRepository = {
          create,
        };

        const app = new App([auditController]);
        const response = await request(app.getServer())
          .post(`${AUDIT_API}`)
          .send({
            userId: '123',
            orgId: '1',
            eventType: 'OPERATION',
            level: 1,
            createdBy: 'bot',
          });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
          code: 200,
          error: '',
          data: 'OK',
        });
      });
    });
  });
});
