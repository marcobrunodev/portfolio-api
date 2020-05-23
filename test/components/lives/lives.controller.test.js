import { config } from 'dotenv';
import request from 'supertest';
import { expect } from 'chai';
import server from '../../../src/api/server';
import { LivesBuilder } from '../../data-builder/index';

config();
const { PREFIX } = process.env;

describe('Lives Controller', () => {
  describe(`POST ${PREFIX}/lives`, () => {
    it('should return status 400 and msg with field and error when send a JSON without shortTitle', async () => {
      const live = LivesBuilder.randomLivesInfoWithoutGuest();
      const { shortTitle, ...liveWithoutTitleShort } = live;

      const { statusCode, body } = await request(server)
        .post(`${PREFIX}/lives`)
        .send(liveWithoutTitleShort);

      expect(statusCode).to.equals(400);
      expect(body).to.have.property('field');
      expect(body).to.have.property('error');
    });

    it('should return status 400 and msg with field and error when send a JSON without title', async () => {
      const live = LivesBuilder.randomLivesInfoWithoutGuest();
      const { title, ...liveWithoutTitle } = live;

      const { statusCode, body } = await request(server)
        .post(`${PREFIX}/lives`)
        .send(liveWithoutTitle);

      expect(statusCode).to.equals(400);
      expect(body).to.have.property('field');
      expect(body).to.have.property('error');
    });

    it('should return status 400 and msg with field and error when send a JSON without startDate', async () => {
      const live = LivesBuilder.randomLivesInfoWithoutGuest();
      const { startDate, ...liveWithoutStartDate } = live;

      const { statusCode, body } = await request(server)
        .post(`${PREFIX}/lives`)
        .send(liveWithoutStartDate);

      expect(statusCode).to.equals(400);
      expect(body).to.have.property('field');
      expect(body).to.have.property('error');
    });

    it('should return status 400 and msg with field and error when send a JSON without finishDate', async () => {
      const live = LivesBuilder.randomLivesInfoWithoutGuest();
      const { finishDate, ...liveWithoutFinishDate } = live;

      const { statusCode, body } = await request(server)
        .post(`${PREFIX}/lives`)
        .send(liveWithoutFinishDate);

      expect(statusCode).to.equals(400);
      expect(body).to.have.property('field');
      expect(body).to.have.property('error');
    });

    it('should return status 400 and msg with field and error when send a JSON without goals', async () => {
      const live = LivesBuilder.randomLivesInfoWithoutGuest();
      const { goals, ...liveWithoutGoals } = live;

      const { statusCode, body } = await request(server)
        .post(`${PREFIX}/lives`)
        .send(liveWithoutGoals);

      expect(statusCode).to.equals(400);
      expect(body).to.have.property('field');
      expect(body).to.have.property('error');
    });

    it('should return status 400 and msg with field and error when send a JSON without description', async () => {
      const live = LivesBuilder.randomLivesInfoWithoutGuest();
      const { description, ...liveWithoutDescription } = live;

      const { statusCode, body } = await request(server)
        .post(`${PREFIX}/lives`)
        .send(liveWithoutDescription);

      expect(statusCode).to.equals(400);
      expect(body).to.have.property('field');
      expect(body).to.have.property('error');
    });

    it('should return status 400 and msg with field and error when send a JSON without shortDescription', async () => {
      const live = LivesBuilder.randomLivesInfoWithoutGuest();
      const { shortDescription, ...liveWithoutShortDescription } = live;

      const { statusCode, body } = await request(server)
        .post(`${PREFIX}/lives`)
        .send(liveWithoutShortDescription);

      expect(statusCode).to.equals(400);
      expect(body).to.have.property('field');
      expect(body).to.have.property('error');
    });

    it('should return status 200 when send a valid JSON', async () => {
      const live = LivesBuilder.randomLivesInfoWithoutGuest();
      const { statusCode } = await request(server)
        .post(`${PREFIX}/lives`)
        .send(live);

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
