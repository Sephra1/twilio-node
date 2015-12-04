'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

var TriggerInstance;
var TriggerContext;

function TriggerInstance() {
}

Object.defineProperty(TriggerInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TriggerContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'callbackMethod', {
  get: function() {
    return this._properties.callbackMethod;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'callbackUrl', {
  get: function() {
    return this._properties.callbackUrl;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'currentValue', {
  get: function() {
    return this._properties.currentValue;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'dateFired', {
  get: function() {
    return this._properties.dateFired;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'recurring', {
  get: function() {
    return this._properties.recurring;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'triggerBy', {
  get: function() {
    return this._properties.triggerBy;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'triggerValue', {
  get: function() {
    return this._properties.triggerValue;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'usageCategory', {
  get: function() {
    return this._properties.usageCategory;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'usageRecordUri', {
  get: function() {
    return this._properties.usageRecordUri;
  },
});

/**
 * Initialize the TriggerContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique usage-trigger Sid
 *
 * @returns {TriggerContext}
 */
TriggerInstance.prototype.TriggerInstance = function TriggerInstance(version,
    payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    callbackMethod: payload.callback_method, // jshint ignore:line,
    callbackUrl: payload.callback_url, // jshint ignore:line,
    currentValue: payload.current_value, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateFired: payload.date_fired, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    recurring: payload.recurring, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    triggerBy: payload.trigger_by, // jshint ignore:line,
    triggerValue: payload.trigger_value, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    usageCategory: payload.usage_category, // jshint ignore:line,
    usageRecordUri: payload.usage_record_uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a TriggerInstance
 *
 * @returns Fetched TriggerInstance
 */
TriggerInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the TriggerInstance
 *
 * @param string [opts.callbackMethod] - HTTP method to use with callback_url
 * @param string [opts.callbackUrl] -
 *  URL Twilio will request when the trigger fires
 * @param string [opts.friendlyName] -
 *  A user-specified, human-readable name for the trigger.
 *
 * @returns Updated TriggerInstance
 */
TriggerInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the TriggerInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TriggerInstance.prototype.delete = function delete() {
  return this._proxy.delete();
};


/**
 * Initialize the TriggerContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique usage-trigger Sid
 *
 * @returns {TriggerContext}
 */
function TriggerContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/Usage/Triggers/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

/**
 * Fetch a TriggerInstance
 *
 * @returns Fetched TriggerInstance
 */
TriggerContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new TriggerInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Update the TriggerInstance
 *
 * @param string [opts.callbackMethod] - HTTP method to use with callback_url
 * @param string [opts.callbackUrl] -
 *  URL Twilio will request when the trigger fires
 * @param string [opts.friendlyName] -
 *  A user-specified, human-readable name for the trigger.
 *
 * @returns Updated TriggerInstance
 */
TriggerContext.prototype.update = function update(opts) {
  var data = values.of({
    'Callbackmethod': opts.callbackMethod,
    'Callbackurl': opts.callbackUrl,
    'Friendlyname': opts.friendlyName,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new TriggerInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Deletes the TriggerInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TriggerContext.prototype.delete = function delete() {
  return this._version.delete('delete', this._uri);
};

module.exports = {
  TriggerInstance: TriggerInstance,
  TriggerContext: TriggerContext
};