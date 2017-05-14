'use strict';
/*jshint expr: true*/
const path = require('path');
const events = require('events');
const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs-extra');
const expect = require('chai').expect;
const periodic = require('../../../index');
const periodicClass = require('../../../lib/periodicClass');
const express = require('../../../lib/init/express');
const testPathDir = path.resolve(__dirname, '../../mock/spec/periodic');
const initTestExpressPathDir = path.join(testPathDir, 'TestExpress');
const initTestExpressEndPathDir = path.join(testPathDir, 'TestExpressEnd');
chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));

describe('Periodic Init Express', function() {
  this.timeout(10000);
  before('initialize Express test periodic dir', (done) => {
    Promise.all([
        fs.ensureDir(initTestExpressPathDir),
        fs.ensureDir(initTestExpressEndPathDir),
      ])
      .then(() => {
        done();
      }).catch(done);
  });
  describe('configureViews', () => {
    it('should handle errors', () => {
      expect(express.configureViews()).to.eventually.be.rejected;
    });
  });
  describe('configureExpress', () => {
    it('should handle errors', () => {
      expect(express.configureExpress()).to.eventually.be.rejected;
    });
  });
  describe('customizeExpress', () => {
    it('should handle errors', () => {
      expect(express.customizeExpress()).to.eventually.be.rejected;
    });
  });
  describe('staticCacheExpress', () => {
    it('should handle errors', () => {
      expect(express.staticCacheExpress()).to.eventually.be.rejected;
    });
  });
  describe('compressExpress', () => {
    it('should handle errors', () => {
      expect(express.compressExpress()).to.eventually.be.rejected;
    });
  });
  describe('logExpress', () => {
    it('should handle errors', () => {
      expect(express.logExpress()).to.eventually.be.rejected;
    });
  });
  // describe('expressSessions', () => {
  //   it('should handle errors', () => {
  //     expect(express.expressSessions()).to.eventually.be.rejected;
  //   });
  // });
  // describe('expressLocals', () => {
  //   it('should handle errors', () => {
  //     expect(express.expressLocals()).to.eventually.be.rejected;
  //   });
  // });
  // describe('expressRouting', () => {
  //   it('should handle errors', () => {
  //     expect(express.expressRouting()).to.eventually.be.rejected;
  //   });
  // });
  // describe('expressStatus', () => {
  //   it('should handle errors', () => {
  //     expect(express.expressStatus()).to.eventually.be.rejected;
  //   });
  // });
  // describe('expressErrors', () => {
  //   it('should handle errors', () => {
  //     expect(express.expressErrors()).to.eventually.be.rejected;
  //   });
  // });
  describe('Error handling', () => {
    // it('stores intialization start time', (done) => {
    //   const mockThis = {
    //     config: {},
    //   };
    //   express.startTimer.call(mockThis)
    //     .then(result => {
    //       expect(result).to.be.true;
    //       expect(mockThis.config.time_start).to.be.a('number');
    //       done();
    //     })
    //     .catch(done);
    // });
    // it('stores intialization end time', (done) => {
    //   const infoSpy = sinon.spy();
    //   const mockThis = {
    //     config: {},
    //     logger: {
    //       info: infoSpy,
    //     },
    //   };
    //   express.endTimer.call(mockThis)
    //     .then(result => {
    //       expect(result).to.be.true;
    //       expect(infoSpy.called).to.be.true;
    //       expect(mockThis.config.time_end).to.be.a('number');
    //       done();
    //     })
    //     .catch(done);
    // });
  });
  after('remove Express test periodic dir', (done) => {
    Promise.all([
        fs.remove(initTestExpressPathDir),
        fs.remove(initTestExpressEndPathDir),
      ])
      .then(() => {
        done();
      }).catch(done);
  });
});