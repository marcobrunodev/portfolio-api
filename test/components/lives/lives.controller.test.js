import { config } from 'dotenv';
import request from 'supertest';
import { expect } from 'chai';
import server from '../../../src/api/server';
import { LivesBuilder } from '../../data-builder/index';

config();
const { PREFIX } = process.env;

describe('Lives Controller', () => {
  describe(`POST ${PREFIX}/lives`, () => {
    it('should return status 200 when send a valid JSON', async () => {
      const lives = LivesBuilder.randomLivesInfoWithoutGuest();
      const { statusCode } = await request(server)
        .post(`${PREFIX}/lives`)
        .send(lives);

      expect(statusCode).to.equal(200);
    });
  });
  describe('GET /lives/schedule', () => {
    it('should return status 200', async () => {
      const { statusCode } = await request(server).get(
        `${PREFIX}/lives/schedule`
      );

      expect(statusCode).to.equal(200);
    });
  });
});
