/**
  Ember Data

  @module ember-data
  @main ember-data
*/

// support RSVP 2.x via resolve,  but prefer RSVP 3.x's Promise.cast
Ember.RSVP.Promise.cast = Ember.RSVP.Promise.cast || Ember.RSVP.resolve;

import DS from "ember-data/core";
import "ember-data/ext/date";

import {
  Store,
  PromiseArray,
  PromiseObject
} from "ember-data/system/store";
import {
  Model,
  Errors,
  RootState,
  attr
} from "ember-data/system/model";
import {
  AttributeChange,
  RelationshipChange,
  RelationshipChangeAdd,
  RelationshipChangeRemove,
  OneToManyChange,
  ManyToNoneChange,
  OneToOneChange,
  ManyToManyChange
} from "ember-data/system/changes";
import {
  InvalidError,
  Adapter
} from "ember-data/system/adapter";
import DebugAdapter from "ember-data/system/debug";
import {
  RecordArray,
  FilteredRecordArray,
  AdapterPopulatedRecordArray,
  ManyArray
} from "ember-data/system/record_arrays";
import RecordArrayManager from "ember-data/system/record_array_manager";
import {
  RESTAdapter,
  FixtureAdapter
} from "ember-data/adapters";
import JSONSerializer from "ember-data/serializers/json_serializer";
import RESTSerializer from "ember-data/serializers/rest_serializer";
import "ember-inflector";
import EmbeddedRecordsMixin from "ember-data/serializers/embedded_records_mixin";
import {
  ActiveModelAdapter,
  ActiveModelSerializer
} from "activemodel-adapter";

import {
  Transform,
  DateTransform,
  NumberTransform,
  StringTransform,
  BooleanTransform
} from "ember-data/transforms";

import {hasMany, belongsTo} from "ember-data/system/relationships";
import "ember-data/ember-initializer";
import setupContainer from "ember-data/setup-container";

import ContainerProxy from "ember-data/system/container_proxy";

DS.Store         = Store;
DS.PromiseArray  = PromiseArray;
DS.PromiseObject = PromiseObject;

DS.Model     = Model;
DS.RootState = RootState;
DS.attr      = attr;
DS.Errors    = Errors;

DS.AttributeChange          = AttributeChange;
DS.RelationshipChange       = RelationshipChange;
DS.RelationshipChangeAdd    = RelationshipChangeAdd;
DS.RelationshipChangeRemove = RelationshipChangeRemove;
DS.ManyToNoneChange         = ManyToNoneChange;
DS.OneToManyChange          = OneToManyChange;
DS.ManyToNoneChange         = OneToManyChange;
DS.OneToOneChange           = OneToOneChange;
DS.ManyToManyChange         = ManyToManyChange;

DS.Adapter      = Adapter;
DS.InvalidError = InvalidError;

DS.DebugAdapter = DebugAdapter;

DS.RecordArray                 = RecordArray;
DS.FilteredRecordArray         = FilteredRecordArray;
DS.AdapterPopulatedRecordArray = AdapterPopulatedRecordArray;
DS.ManyArray                   = ManyArray;

DS.RecordArrayManager = RecordArrayManager;

DS.RESTAdapter    = RESTAdapter;
DS.FixtureAdapter = FixtureAdapter;

DS.RESTSerializer = RESTSerializer;
DS.JSONSerializer = JSONSerializer;

DS.Transform       = Transform;
DS.DateTransform   = DateTransform;
DS.StringTransform = StringTransform;
DS.NumberTransform = NumberTransform;
DS.BooleanTransform = BooleanTransform;

DS.ActiveModelAdapter    = ActiveModelAdapter;
DS.ActiveModelSerializer = ActiveModelSerializer;
DS.EmbeddedRecordsMixin  = EmbeddedRecordsMixin;

DS.belongsTo = belongsTo;
DS.hasMany   = hasMany;

DS.ContainerProxy = ContainerProxy;

DS._setupContainer = setupContainer;

Ember.lookup.DS = DS;

export default DS;
