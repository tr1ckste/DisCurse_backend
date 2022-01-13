'use strict';

class Permisions {
  constructor(owner, administrators, moderators) {
    this.owner = owner;
    this.administrators = administrators;
    this.moderators = moderators;
  }
}

module.exports = Permisions;
