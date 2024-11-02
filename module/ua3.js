const UA3 = {};

// ASCII Artwork
UA3.ASCII = `
  _   _   _    _____
 | | | | / \\  |___ /
 | | | |/ _ \\   |_ \\
 | |_| / ___ \\ ___) |
  \\___/_/   \\_\\____/
`;

UA3.chatModifyTimeout = 10 * 60 * 1000; // 10 minutes

UA3.relationships = {
  favorite: 'Favorite',
  guru: 'Guru',
  mentor: 'Mentor',
  responsibility: 'Responsibility',
  protege: 'Protégé',
};

UA3.abilities = {
  connect: 'Connect',
  dodge: 'Dodge',
  fitness: 'Fitness',
  lie: 'Lie',
  knowledge: 'Knowledge',
  notice: 'Notice',
  pursuit: 'Pursuit',
  secrecy: 'Secrecy',
  status: 'Status',
  struggle: 'Struggle',
};

UA3.passions = {
  rage: 'Enraged',
  fear: 'Afraid',
  noble: 'Inspired',
};

UA3.identityTypes = {
  mundane: {
    name: 'Mundane',
    features: {
      max: 3,
      mandatory: ['substituteAbility'],
    },
  },
  adept: {
    name: 'Adept',
    features: {
      max: 2,
      mandatory: ['castsRituals', 'gutterMagick'],
    },
  },
  avatar: {
    name: 'Avatar',
    features: {
      max: 2,
      mandatory: ['castsRituals', 'gutterMagick'],
    },
  },
  supernatural: {
    name: 'Supernatural',
    features: {
      max: 1,
      mandatory: [],
    },
  },
};

UA3.identityFeatures = {
  cooperative: {
    name: 'Cooperative',
    types: ['mundane'],
    action: 'cooperate',
    descr:
      'If the substituted Ability applies when you help someone, you may add or subtract 10 to their check result.',
  },
  castsRituals: {
    name: 'Casts Rituals',
    types: ['mundane', 'adept', 'avatar'],
    action: 'cast',
    descr: 'May be used to cast thaumaturgic rituals.',
  },
  gutterMagick: {
    name: 'Use Gutter Magick',
    types: ['mundane', 'adept', 'avatar'],
    action: 'cast',
    descr: 'May be used to cast perform gutter magick.',
  },
  coercesHelplessness: {
    name: 'Coerces Helplessness',
    types: ['mundane'],
    action: 'coerce',
    target: 'helplessness',
    descr: 'May be used to force a Helplessness check.',
  },
  coercesIsolation: {
    name: 'Coerces Isolation',
    types: ['mundane'],
    action: 'coerce',
    target: 'Isolation',
    descr: 'May be used to force an Isolation check.',
  },
  coercesSelf: {
    name: 'Coerces Self',
    types: ['mundane'],
    action: 'coerce',
    target: 'self',
    descr: 'May be used to force a Self check.',
  },
  coercesUnnatural: {
    name: 'Coerces Unnatural',
    types: ['mundane'],
    action: 'coerce',
    target: 'unnatural',
    descr: 'May be used to force an Unnatural check.',
  },
  coercesViolence: {
    name: 'Coerces Violence',
    types: ['mundane'],
    action: 'coerce',
    target: 'violence',
    descr: 'May be used to force a Violence check.',
  },
  evaluateHelplessness: {
    name: 'Evaluate Helplessness',
    types: ['mundane'],
    action: 'evaluate',
    target: 'helplessness',
    descr: "May be used to assess a target's Helplessness.",
  },
  evaluateIsolation: {
    name: 'Evaluate Isolation',
    types: ['mundane'],
    action: 'evaluate',
    target: 'isolation',
    descr: "May be used to assess a target's Isolation.",
  },
  evaluateSelf: {
    name: 'Evaluate Self',
    types: ['mundane'],
    action: 'evaluate',
    target: 'self',
    descr: "May be used to assess a target's Self.",
  },
  evaluateUnnatural: {
    name: 'Evaluate Unnatural',
    types: ['mundane'],
    action: 'evaluate',
    target: 'unnatural',
    descr: "May be used to assess a target's Unnatural.",
  },
  evaluateViolence: {
    name: 'Evaluate Violence',
    types: ['mundane'],
    action: 'evaluate',
    target: 'violence',
    descr: "May be used to assess a target's Violence.",
  },
  assessConnect: {
    name: 'Assess Connect',
    types: ['mundane'],
    action: 'assess',
    target: 'connect',
    descr: "May be used to assess the relative competence of a target's Connect.",
  },
  assessDodge: {
    name: 'Assess Dodge',
    types: ['mundane'],
    action: 'assess',
    target: 'dodge',
    descr: "May be used to assess the relative competence of a target's Dodge.",
  },
  assessFitness: {
    name: 'Assess Fitness',
    types: ['mundane'],
    action: 'assess',
    target: 'fitness',
    descr: "May be used to assess the relative competence of a target's Fitness.",
  },
  assessLie: {
    name: 'Assess Lie',
    types: ['mundane'],
    action: 'assess',
    target: 'lie',
    descr: "May be used to assess the relative competence of a target's Lie.",
  },
  assessKnowledge: {
    name: 'Assess Knowledge',
    types: ['mundane'],
    action: 'assess',
    target: 'knowledge',
    descr: "May be used to assess the relative competence of a target's Knowledge.",
  },
  assessNotice: {
    name: 'Assess Notice',
    types: ['mundane'],
    action: 'assess',
    target: 'notice',
    descr: "May be used to assess the relative competence of a target's Notice.",
  },
  assessPursuit: {
    name: 'Assess Pursuit',
    types: ['mundane'],
    action: 'assess',
    target: 'pursuit',
    descr: "May be used to assess the relative competence of a target's Pursuit.",
  },
  assessSecrecy: {
    name: 'Assess Secrecy',
    types: ['mundane'],
    action: 'assess',
    target: 'secrecy',
    descr: "May be used to assess the relative competence of a target's Secrecy.",
  },
  assessStatus: {
    name: 'Assess Status',
    types: ['mundane'],
    action: 'assess',
    target: 'status',
    descr: "May be used to assess the relative competence of a target's Status.",
  },
  assessStruggle: {
    name: 'Assess Struggle',
    types: ['mundane'],
    action: 'assess',
    target: 'struggle',
    descr: "May be used to assess the relative competence of a target's Struggle.",
  },
  medical: {
    name: 'Medical',
    types: ['mundane'],
    descr: 'Includes formal medical training.',
  },
  firearms: {
    name: 'Firearms',
    types: ['mundane'],
    target: 'firearms',
    descr: 'Includes firearms training.',
  },
  woundThreshold: {
    name: 'Wound Threshold',
    types: ['mundane'],
    target: 'wounds',
    descr: 'Set the Wound Threshold equal to the Identity rank.',
  },
  initiative: {
    name: 'Initiative',
    types: ['mundane'],
    target: 'initiative',
    descr: 'Substitutes for initiative in combat.',
  },
  readObsession: {
    name: 'Read Obsession',
    types: ['mundane'],
    descr: "May be used to gain an impression of a target's obsession.",
  },
  readFear: {
    name: 'Read Fear',
    types: ['mundane'],
    target: 'fear',
    descr: "May be used to gain an impression of a target's Fear trigger.",
  },
  readRage: {
    name: 'Read Rage',
    types: ['mundane'],
    target: 'rage',
    descr: "May be used to gain an impression of a target's Rage trigger.",
  },
  readNoble: {
    name: 'Read Noble',
    types: ['mundane'],
    target: 'noble',
    descr: "May be used to gain an impression of a target's Noble trigger.",
  },
  protectHelplessness: {
    name: 'Protects Helplessness',
    types: ['mundane'],
    action: 'protect',
    target: 'helplessness',
    descr: 'Substitutes for the Ability when protecting Helplessness.',
  },
  protectIsolation: {
    name: 'Protects Isolation',
    types: ['mundane'],
    action: 'protect',
    target: 'isolation',
    descr: 'Substitutes for the Ability when protecting Isolation.',
  },
  protectSelf: {
    name: 'Protects Self',
    types: ['mundane'],
    action: 'protect',
    target: 'self',
    descr: 'Substitutes for the Ability when protecting Self.',
  },
  protectUnnatural: {
    name: 'Protects Unnatural',
    types: ['mundane'],
    action: 'protect',
    target: 'unnatural',
    descr: 'Substitutes for the Ability when protecting Unnatural.',
  },
  protectViolence: {
    name: 'Protects Violence',
    types: ['mundane'],
    action: 'protect',
    target: 'violence',
    descr: 'Substitutes for the Ability when protecting Violence.',
  },
  sincere: {
    name: 'Sincere',
    types: ['mundane'],
    descr: 'Adds a +10 shift when dealing with your Relationships.',
  },
  substituteConnect: {
    name: 'Substitutes for Connect',
    types: ['mundane'],
    action: 'check',
    target: 'connect',
    descr: 'May substitute for Connect when making an Ability check.',
  },
  substituteDodge: {
    name: 'Substitutes for Dodge',
    types: ['mundane'],
    action: 'check',
    target: 'dodge',
    descr: 'May substitute for Dodge when making an Ability check.',
  },
  substituteFitness: {
    name: 'Substitutes for Fitness',
    types: ['mundane'],
    action: 'check',
    target: 'fitness',
    descr: 'May substitute for Fitness when making an Ability check.',
  },
  substituteLie: {
    name: 'Substitutes for Lie',
    types: ['mundane'],
    action: 'check',
    target: 'lie',
    descr: 'May substitute for Lie when making an Ability check.',
  },
  substituteKnowledge: {
    name: 'Substitutes for Knowledge',
    types: ['mundane'],
    action: 'check',
    target: 'knowledge',
    descr: 'May substitute for Knowledge when making an Ability check.',
  },
  substituteNotice: {
    name: 'Substitutes for Notice',
    types: ['mundane'],
    action: 'check',
    target: 'notice',
    descr: 'May substitute for Notice when making an Ability check.',
  },
  substitutePursuit: {
    name: 'Substitutes for Pursuit',
    types: ['mundane'],
    action: 'check',
    target: 'pursuit',
    descr: 'May substitute for Pursuit when making an Ability check.',
  },
  substituteSecrecy: {
    name: 'Substitutes for Secrecy',
    types: ['mundane'],
    action: 'check',
    target: 'secrecy',
    descr: 'May substitute for Secrecy when making an Ability check.',
  },
  substituteStatus: {
    name: 'Substitutes for Status',
    types: ['mundane'],
    action: 'check',
    target: 'status',
    descr: 'May substitute for Status when making an Ability check.',
  },
  substituteStruggle: {
    name: 'Substitute for Struggle',
    types: ['mundane'],
    action: 'check',
    target: 'struggle',
    descr: 'May substitute for Struggle when making an Ability check.',
  },
  tactical: {
    name: 'Tactical',
    types: ['mundane'],
    descr:
      'May be used to give advice relevant to the Identity. Someone who follows the advice is able to flip-flop a check.',
  },
  therapeutic: {
    name: 'Therapeutic',
    types: ['mundane'],
    descr: 'May be used to provide therapy to treat mental distress.',
  },
  totem: {
    name: 'Totem',
    types: ['mundane'],
    descr: 'May protect against the consequences of a failed Stress check.',
  },
  unique: {
    name: 'Unique',
    types: ['mundane'],
    descr: 'Provides a unique feature.',
  },
  weaponizedPhysique: {
    name: 'Weaponized Physique',
    types: ['mundane'],
    target: 'weaponizedphysique',
    descr: 'Adds 1 to any Struggle damage (2 for Matched, 3 for Critical), and an automatic 1 damage when grappling.',
  },
  vagueInformation: {
    name: 'Vague Information',
    types: ['supernatural'],
    descr:
      '<div>Provides hints, clues and insight, offering abstract guidance instead of concrete fact. It requires time in a tranquil environment - such as reading tarot, crystal gazing, or consulting a spirit guide.</div><ul class="no-bullets"><li><b>Fumble</b> -	You see something horrible, and suffer a rank 4 Helplessness or Violence check, as the GM describes the dire future.</li><li><b>Fail or Matched Fail</b> -	Outcome hazy… try again later.</li><li><b>Success</b> - You get a Hunch, and some vague insight into what’s going on.</li><li><b>Matched Success</b> - You gain a Hunch, and a clue that futhers the plot.</li><li><b>Critical</b> - You gain two Hunches, and a giant clue towards your personal goals.</li></ul>',
  },
  specificInformation: {
    name: 'Specific Information',
    types: ['supernatural'],
    descr: '',
  },
  vagueProtection: {
    name: 'Vague Protection',
    types: ['supernatural'],
    descr: '',
  },
  specificProtectionSanity: {
    name: 'Specific Protection (Sanity)',
    types: ['supernatural'],
    descr: '',
  },
  specificProtectionBody: {
    name: 'Specific Protection (Body)',
    types: ['supernatural'],
    descr: '',
  },
  specificProtectionMagick: {
    name: 'Specific Protection (Magick)',
    types: ['supernatural'],
    descr: '',
  },
  vagueHarm: {
    name: 'Vague Harm',
    types: ['supernatural'],
    descr: '',
  },
  specificHarm: {
    name: 'Specific Harm',
    types: ['supernatural'],
    descr: '',
  },
  influence: {
    name: 'Influence',
    types: ['supernatural'],
    descr: '',
  },
  versatility: {
    name: 'Versatility',
    types: ['supernatural'],
    descr: '',
  },
};

async function preloadTemplates() {
  const templatePaths = [
    'systems/ua3/templates/chat/roll-result.hbs',
    'systems/ua3/templates/chat/roll-dialog.hbs',
    'systems/ua3/templates/chat/initiative-dialog.hbs',
    'systems/ua3/templates/actor/hunch-dialog.hbs',
    'systems/ua3/templates/actor/effect-dialog.hbs',
  ];

  return loadTemplates(templatePaths);
}

class ua3Combat extends Combat {
  async startCombat() {
    await this.setupTurns();
    return super.startCombat();
  }

  async nextRound() {
    await this.resetAll();
    return super.nextRound();
  }

  /**
   * Define how the array of Combatants is sorted in the displayed list of the tracker.
   * This method can be overridden by a system or module which needs to display combatants in an alternative order.
   * The default sorting rules sort in descending order of initiative using combatant IDs for tiebreakers.
   * @param {Combatant} a     Some combatant
   * @param {Combatant} b     Some other combatant
   * @protected
   */
  _sortCombatants(a, b) {
    const ia = Number(Number.isNumeric(a.initiative ?? a.resource) ? a.initiative ?? a.resource : -Infinity);
    const ib = Number(Number.isNumeric(b.initiative ?? b.resource) ? b.initiative ?? b.resource : -Infinity);
    //console.log(a);
    //console.log(b);
    return ib - ia || (a.id > b.id ? 1 : -1);
  }

  /**
   * Roll initiative for one or multiple Combatants within the Combat document
   * @param {string|string[]} ids     A Combatant id or Array of ids for which to roll
   * @param {object} [options={}]     Additional options which modify how initiative rolls are created or presented.
   * @param {string|null} [options.formula]         A non-default initiative formula to roll. Otherwise, the system
   *                                                default is used.
   * @param {boolean} [options.updateTurn=true]     Update the Combat turn after adding new initiative scores to
   *                                                keep the turn on the same Combatant.
   * @param {object} [options.messageOptions={}]    Additional options with which to customize created Chat Messages
   * @returns {Promise<Combat>}       A promise which resolves to the updated Combat document once updates are complete.
   */
  async rollInitiative(ids, { formula = null, updateTurn = true, messageOptions = {} } = {}) {
    // Structure input data
    ids = typeof ids === 'string' ? [ids] : ids;
    const currentId = this.combatant?.id;

    // Iterate over Combatants, performing an initiative roll for each
    const updates = [];
    for (let [i, id] of ids.entries()) {
      // Get Combatant data (non-strictly)
      const combatant = this.combatants.get(id);
      if (!combatant?.isOwner) continue;

      // Produce an initiative roll for the Combatant
      const roll = combatant.getInitiativeRoll(formula);
      await roll.evaluate();
      updates.push({ _id: id, initiative: roll.total });
    }
    if (!updates.length) return this;

    // Update multiple combatants
    await this.updateEmbeddedDocuments('Combatant', updates);

    // Ensure the turn order remains with the same combatant
    if (updateTurn && currentId) {
      await this.update({ turn: this.turns.findIndex((t) => t.id === currentId) });
    }
    return this.update({ turn: 0 });
  }
}

class ua3CombatTracker extends CombatTracker {
  get template() {
    return 'systems/ua3/templates/combat/combat-tracker.hbs';
  }
  
  /*
  async getData(options = {}) {
    let context = await super.getData(options);

    console.log(context);
    return context;
  }
  */
}

class ua3Combatant extends Combatant {
  prepareDerivedData() {
    super.prepareDerivedData();
    //this.flags = { isNameKnown: true };

    if (!this.isOwner) {
      if (!this.hasPlayerOwner && this.token.displayName == CONST.TOKEN_DISPLAY_MODES.OWNER) {
        this.name = '';
      }
    }
  }
}

/**
 * A type of Roll specific to a UA3 style check for Unknown Armies.
 * @param {string} formula                             The string formula to parse
 * @param {object} data                                The data object against which to parse attributes within the formula
 * @param {object} [options={}]                        Extra optional arguments which describe or modify the roll
 * @param {number} [options.skills]                    One or more skills that can be used for the roll
 * @param {number} [options.shifts]                    What bonus or penalty shift to apply to the roll
 * @param {number} [options.focus]                     The focus shift applied
 * @param {number} [options.aim]                       The aim bonus applied
 * @param {number} [options.difficulty]                What base difficulty to apply to the roll
 * @param {number} [options.critical]                  The result which represents a critical success
 * @param {number} [options.fumble]                    The result which represents a critical failure
 * @param {boolean} [options.flipflop=false]           Allow flip flop?
 * @param {boolean} [options.recheck=false]            Allow recheck on falure?
 */
class DUARoll extends Roll {
  constructor(formula, data, options) {
    super(formula, data, options);
    if (!(this.terms[0] instanceof foundry.dice.terms.Die && this.terms[0].faces === 100)) {
      throw new Error(`Invalid DUATRoll formula provided ${this._formula}`);
    }
    this.configureModifiers();
  }

  static async formatChat(message, html) {
    const RESULT_TEMPLATE = 'systems/ua3/templates/chat/roll-result.hbs';
    let data = message;
    let content = html.find('.message-content');
    let flags = data.flags.ua3.chatData;

    let damage = flags.damage;
    let isGMGenerated = flags.isGM || false;
    let isGMViewer = game.user.isGM;

    if (isGMGenerated && !isGMViewer) {
      if (flags.isMagick) {
        let options = ['Does', 'Perpetrates', 'Pulls', 'Enacts', 'Executes', 'Performs'];
        let newDescr = options[(options.length * Math.random()) | 0];
        options = ['some', 'weird', 'strange', 'odd'];
        newDescr += ' ' + options[(options.length * Math.random()) | 0];
        options = ['arcane', 'mystical', 'supernatural', 'magickal', 'paranormal'];
        newDescr += ' ' + options[(options.length * Math.random()) | 0];
        options = ['shit', 'crap', 'stuff'];
        newDescr += ' ' + options[(options.length * Math.random()) | 0];

        flags.skillActionDescr = newDescr;
        flags.using = '';
      }
    }
    // show the GM everything
    if (isGMGenerated && isGMViewer) {
      flags.isGM = false;
    }

    let tmpl = await renderTemplate(RESULT_TEMPLATE, flags);
    content.html(tmpl);

    let resultColor,
      resultDescr = '',
      extraText = '';

    let tens,
      units = 0;

    //flags.resultValue = 100; // for testing

    if (flags.resultValue == 100) {
      tens = 10;
      units = 10;
    } else if (flags.resultValue < 10) {
      tens = 0;
      units = flags.resultValue;
    } else {
      tens = Math.floor(flags.resultValue / 10);
      units = flags.resultValue - tens * 10;
    }
    let isMatched = tens == units;
    let isSuccess = false;

    if (flags.resultValue <= flags.targetMaximum && flags.resultValue >= flags.targetMinimum) {
      resultColor = 'MediumSeaGreen';
      isSuccess = true;
      if (flags.resultValue <= flags.critical) {
        resultDescr = 'Critical';
      } else {
        resultDescr = (isMatched ? 'Matched ' : '') + 'Success';
      }
    } else {
      resultColor = 'Tomato';
      if (flags.resultValue >= flags.fumble) {
        resultDescr = 'Fumble';
      } else {
        resultDescr = (isMatched ? 'Matched ' : '') + 'Failure';
      }
    }

    if (damage.supressing) {
      let suppressDescr = '';
      let damageAmount = 0;

      switch (resultDescr) {
        case 'Critical':
          suppressDescr =
            'Those downrange are suppressed, and need a Violence-3 check to break cover or avoid seeking cover. ' +
            'You also lucked out and hit one of them, ';
          damageAmount = (tens == 0 ? 10 : tens) + (units == 0 ? 10 : units) + units;
          suppressDescr =
            suppressDescr + this._damageDescription(damageAmount, this._hitLocation(units), resultDescr, isGMViewer);
          break;
        case 'Matched Success':
          suppressDescr =
            'Those downrange are suppressed, and need a Violence-3 check to break cover or avoid seeking cover. ' +
            'You also clipped one of them, ';
          damageAmount = tens + units;
          suppressDescr =
            suppressDescr + this._damageDescription(damageAmount, this._hitLocation(units), resultDescr, isGMViewer);
          break;
        case 'Success':
        case 'Failure':
          extraText =
            'Those downrange are suppressed, and need a Violence-3 check to break cover or avoid seeking cover.';
          break;
        case 'Matched Failure':
          extraText = 'The gun jams. You must spend a Round to clear it before it can be used again.';
          break;
        case 'Fumble':
          suppressDescr = 'You accidentally shot ' + (flags.randomPercent[0] <= 3 ? 'yourself' : 'an ally') + ', ';
          damageAmount = flags.randomPercent[0] + flags.randomPercent[1];
          suppressDescr += this._damageDescription(
            damageAmount,
            this._hitLocation(flags.randomPercent[1]),
            resultDescr,
            isGMViewer,
          );
          break;
      }
      content.find('.damageAmount').text(suppressDescr);
      content.find('.hasDamage').toggle(damageAmount > 0);
    } else if (damage.method && (isSuccess || (resultDescr == 'Failure' && damage.autoOnMiss > 0))) {
      let damageAmount = damage.autoOnMiss;
      let maxDamage = damage.maximum;
      let damageBonus = 0;
      if (damage.attackUsing == 'struggle' && damage.weaponizedPhysique) {
        switch (resultDescr) {
          case 'Critical':
            damageBonus = 3;
            break;
          case 'Matched Success':
            damageBonus = 2;
            break;
          case 'Success':
            damageBonus = 1;
            break;
        }
        maxDamage += damageBonus;
      }

      let hitLocation = damage.woundType == 'irritant' ? 'face' : this._hitLocation(units);
      let instantTakeout = false;
      let damageDescr = '';

      if (damage.method == 'sum') {
        switch (resultDescr) {
          case 'Critical': {
            instantTakeout = true;
            if (damage.woundType == 'irritant') {
              damageAmount = 0;
              extraText = `The target is permanently blinded, and loses consciousness due to pain for ${
                units == 0 ? 10 : units
              } minute${units == 0 ? 10 : units > 1 ? 's' : ''}.`;
            } else if (damage.isUnarmed) {
              extraText = 'Causing your choice of unconsciousness or a fatal injury to the head.';
            } else {
              extraText = 'Inflicting an instantly fatal injury to the head.';
            }
            break;
          }
          case 'Matched Success': {
            if (damage.woundType == 'irritant') {
              damageAmount = 0;
              instantTakeout = true;
              const duration = Math.max(tens == 0 ? 10 : tens, units == 0 ? 10 : units);
              extraText = `The target is hit in the face, and must check Fitness or be reduced to writhing in pain for ${duration} Round${
                duration > 1 ? 's' : ''
              }. All physical actions are at -30 and their senses of sight, smell and taste are lost for 10 minutes.`;
            } else if (damage.isUnarmed) {
              damageAmount = (tens == 0 ? 10 : tens) + (units == 0 ? 10 : units) + damageBonus;
              if (damageAmount > maxDamage) {
                damageAmount = maxDamage;
              }
            } else {
              damageAmount = flags.resultValue;
            }
            break;
          }
          case 'Success': {
            if (damage.woundType == 'irritant') {
              damageAmount = 0;
              instantTakeout = true;
              const duration = tens == 0 ? 10 : tens;
              extraText = `The target is hit in the face, and must check Fitness or be reduced to writhing in pain for ${duration} Round${
                duration > 1 ? 's' : ''
              }. All physical actions are at -30 and their senses of sight, smell and taste are lost for 10 minutes.`;
            } else {
              damageAmount = (tens == 0 ? 10 : tens) + (units == 0 ? 10 : units) + damageBonus;
              if (damageAmount > maxDamage) {
                damageAmount = maxDamage;
              }
            }
            break;
          }
          default:
            damageAmount = damage.autoOnMiss + damageBonus;
            break;
        }
      } else {
        switch (resultDescr) {
          case 'Critical': {
            if (damage.woundType == 'stun') {
              instantTakeout = true;
              damageAmount = 0;
              extraText = '`The target convulses, and falls unconscious for 10 minutes.';
            } else {
              damageAmount = maxDamage;
            }
            break;
          }
          case 'Matched Success': {
            if (damage.woundType == 'stun') {
              instantTakeout = true;
              damageAmount = 0;
              const duration = tens == 0 ? 10 : tens;
              extraText = `The target twitches and jerks; if ${
                flags.resultValue
              } <= their Wounds, they go limp for ${duration} minute${
                duration > 1 ? 's' : ''
              }. If higher, then for the next 2 Rounds they suffer a -30 penalty on physical actions and must make a Fitness check if they want to flee.`;
            } else {
              damageAmount = Number(flags.resultValue) + damageBonus;
              if (damageAmount > maxDamage) {
                damageAmount = maxDamage;
              }
            }
            break;
          }
          case 'Success': {
            if (damage.woundType == 'stun') {
              instantTakeout = true;
              damageAmount = 0;
              let duration = tens == 0 ? 10 : tens;
              extraText = `The target spasms; if ${
                flags.resultValue
              } <= their Wounds, they go limp for ${duration} minute${
                duration > 1 ? 's' : ''
              }. If higher, then for the next Round they suffer a -30 penalty on physical actions and must make a Fitness check if they want to flee.`;
            } else {
              damageAmount = Number(flags.resultValue) + damageBonus;
              if (damageAmount > maxDamage) {
                damageAmount = maxDamage;
              }
            }
            break;
          }
          default:
            damageAmount = damage.autoOnMiss + damageBonus;
            break;
        }
      }

      if (!instantTakeout) {
        damageDescr = this._damageDescription(damageAmount, hitLocation, resultDescr, isGMViewer);
      }

      content.find('.damageAmount').text(damageDescr);
      content.find('.hasDamage').toggle(damageAmount > 0);
    } else {
      switch (resultDescr) {
        case 'Matched Failure': {
          if (damage.attackUsing == 'firearms') {
            extraText = 'The gun jams. You must spend a Round to clear it before it can be used again.';
          } else if (damage.woundType == 'irritant') {
            extraText =
              'You accidentally spray yourself, and are reduced to gasping and choking for the next Round. Your Notice has a -10 shift until you can get medical attention.';
          } else if (damage.woundType == 'stun') {
            const duration = Math.min(flags.randomPercent[0], flags.randomPercent[1]);
            extraText = `You accidentally stun yourself, and suffer a -20 penalty on physical actions for the next ${duration} Round${
              duration > 1 ? 's' : ''
            }.`;
          } else if (damage.method == 'sum') {
            if (damage.isUnarmed) {
              extraText = 'You whiff and trip, face plating right in front of your opponent.';
            } else {
              extraText = 'Your wild flailing causes your weapon to slip from your hand and land several yards away.';
            }
          }
          break;
        }
        case 'Fumble': {
          if (damage.attackUsing == 'firearms') {
            extraText = 'You accidentally shot ' + (flags.randomPercent[0] <= 3 ? 'yourself' : 'an ally') + ', ';
            extraText += this._damageDescription(
              flags.randomPercent[0] + flags.randomPercent[1],
              this._hitLocation(flags.randomPercent[1]),
              resultDescr,
              isGMViewer,
            );
          } else if (damage.woundType == 'irritant') {
            const duration = Math.min(flags.randomPercent[0], flags.randomPercent[1]);
            extraText = `You accidentally spray yourself, and lose the next ${duration} Round${
              duration > 1 ? 's' : ''
            } to gasping and choking. Your Notice has a -30 shift until you can get medical attention.`;
          } else if (damage.woundType == 'stun') {
            const duration = Math.min(flags.randomPercent[0], flags.randomPercent[1]);
            extraText = `You accidentally stun yourself, and are out cold for the next ${duration} Round${
              duration > 1 ? 's' : ''
            }.`;
          } else if (damage.method == 'sum') {
            extraText = 'You miscalculate and overextend yourself. Your opponent takes the opportunity to hit you, ';
            extraText += this._damageDescription(
              flags.randomPercent[0],
              this._hitLocation(flags.randomPercent[1]),
              resultDescr,
              isGMViewer,
            );
          }
          break;
        }
      }
    }

    if (flags.isMagick && flags.spell) {
      let spellDescr = '';
      const spell = flags.spell;

      switch (flags.spelltype) {
        case 'adept': {
          let lesscharges = spell.charges - 1;
          switch (resultDescr) {
            case 'Critical':
              spellDescr = 'Uses no charges';
              break;
            case 'Matched Success':
              spellDescr =
                'Uses ' +
                (lesscharges == 0 && !spell.chargeextra
                  ? 'no'
                  : lesscharges + (spell.chargeextra ? '+' : '') + ' ' + spell.chargetype) +
                ' charge' +
                (lesscharges != 1 ? 's' : '');
              break;
            case 'Success':
              spellDescr =
                'Uses ' +
                spell.charges +
                (spell.chargeextra ? '+' : '') +
                ' ' +
                spell.chargetype +
                ' charge' +
                (spell.charges != 1 ? 's' : '');
              break;
            case 'Failure':
              spellDescr = 'Uses no charges';
              break;
            case 'Matched Failure':
              spellDescr = 'Lose 1 ' + spell.chargetype + ' charge';
              break;
            case 'Fumble':
              spellDescr = spell.charges + ' ' + spell.chargetype + ' charge' + (spell.charges != 1 ? 's' : '');
              break;
          }
          break;
        }
      }

      if (!(isGMGenerated && !isGMViewer)) {
        content.find('.isSpell').html(spellDescr);
        content.find('.isSpell').show();
      }
    }

    content.find('.resultBlock').css('border-color', resultColor);
    content.find('.resultDescr').text(resultDescr);
    content.find('.resultMinimum').toggle(flags.targetMinimum > 0);
    if (extraText != '') {
      content.find('.extras').show();
      content.find('.extraText').html(extraText);
    }

    if (Date.now() - data.timestamp < CONFIG.UA3.chatModifyTimeout) {
      // modification time has not expired
      if (flags.canFlipflop && !isMatched) {
        let tgt = content.find('.flipflop');
        tgt.click(function () {
          let wrk = units * 10 + tens;
          flags.resultValue = wrk;
          message.setFlag('ua3', 'chatData', flags);

          let actor = data.speaker.actor;
          if (actor) {
            actor = game.actors.get(actor);
            let actorData = actor.system;
            // unset flip-flop from passions
            if (
              (actorData.passion.rage.triggered && actorData.passion.rage.flipflop) ||
              (actorData.passion.fear.triggered && actorData.passion.fear.flipflop) ||
              (actorData.passion.noble.triggered && actorData.passion.noble.flipflop)
            ) {
              // find the passion effect and remove the change
              let passion = actor.currentPassion();
              let effect = actorData.effects.find((e) => e.name === CONFIG.UA3.passions[passion]);
              if (effect) {
                let changes = effect.changes;
                changes = changes.filter((obj) => obj.key !== 'system.passion.' + passion + '.flipflop');
                effect.update({ changes: changes });
              }
            }
          }
        });
        tgt.show();
      }

      if (flags.canRecheck) {
        let tgt = content.find('.recheck');
        tgt.click(function () {
          flags.resultValue = Math.floor(Math.random() * 6) + 1;
          flags.canRecheck = false;
          message.setFlag('ua3', 'chatData', flags);
        });
        tgt.show();
      }
    }
  }

  /* -------------------------------------------- */
  /*  Roll Methods                                */
  /* -------------------------------------------- */

  /**
   * Apply optional modifiers which customize the behavior of the d20term
   * @private
   */
  configureModifiers() {
    const dUA = this.terms[0];
    dUA.modifiers = [];

    /*
    // Assign critical and fumble thresholds
    if (this.options.critical) dUA.options.critical = this.options.critical;
    if (this.options.fumble) dUA.options.fumble = this.options.fumble;

    // Re-compile the underlying formula
    this._formula = this.constructor.getFormula(this.terms);
    */
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  async toMessage(messageData = {}, options = {}) {
    // Evaluate the roll now so we have the results available to determine flipflop or recheck comes into play
    if (!this._evaluated) await this.evaluate({ async: true });

    // Add appropriate advantage mode message flavor and dnd5e roll flags
    //messageData.flavor = messageData.flavor || this.options.flavor;

    // Add reliable talent to the d20-term flavor text if it applied
    /*
    if ( this.options.reliableTalent ) {
      const d20 = this.dice[0];
      const isRT = d20.results.every(r => !r.active || (r.result < 10));
      const label = `(${game.i18n.localize("DND5E.FlagsReliableTalent")})`;
      if ( isRT ) d20.options.flavor = d20.options.flavor ? `${d20.options.flavor} (${label})` : label;
    }
    */

    // Record the preferred rollMode
    //options.rollMode = options.rollMode ?? this.options.rollMode;
    return super.toMessage(messageData, options);
  }

  /* -------------------------------------------- */
  /*  Configuration Dialog                        */
  /* -------------------------------------------- */

  /**
   * Create a Dialog prompt used to configure evaluation of an existing D20Roll instance.
   * @param {object} data                       Dialog configuration data
   * @param {string} [data.title]               The title of the shown dialog window
   * @param {number} [data.defaultRollMode]     The roll mode that the roll mode select element should default to
   * @param {number} [data.defaultAction]       The button marked as default
   * @param {boolean} [data.chooseModifier]     Choose which ability modifier should be applied to the roll?
   * @param {string} [data.defaultAbility]      For tool rolls, the default ability modifier applied to the roll
   * @param {string} [data.template]            A custom path to an HTML template to use instead of the default
   * @param {object} options                    Additional Dialog customization options
   * @returns {Promise<D20Roll|null>}           A resulting D20Roll object constructed with the dialog, or null if the dialog was closed
   */
  async configureDialog(
    { title, skills, difficulty, hunch, defaultButton = 'roll', defaultAbility, template } = {},
    options = {},
  ) {
    const EVALUATION_TEMPLATE = 'systems/ua3/templates/chat/roll-dialog.hbs';

    // Render the Dialog inner HTML
    const content = await renderTemplate(template ?? EVALUATION_TEMPLATE, {
      formula: 'You are rolling to ' + skills.action + ' <b>' + skills.target.capitalize() + '</b>.',
      skills,
      hunch,
      defaultSkill: skills.skills[0],
    });

    // Create the Dialog window and await submission of the form
    return new Promise((resolve) => {
      new Dialog(
        {
          title,
          content,
          buttons: {
            roll: {
              label: 'Roll',
              callback: (html) => resolve(this._onDialogSubmit(html, 'roll', skills)),
            },
          },
          default: defaultButton,
          render: (html) => this._postRender(html),
          close: () => resolve(null),
        },
        options,
      ).render(true);

      /*
          render: (h) => {
            let ta = $(h).find('textarea')
            $(ta).on('drop', (ev) => {
            .....
          })
        }
        */
    });
  }

  static _hitLocation(roll) {
    if (roll == 0 || roll == 10) {
      return 'head';
    } else if (roll >= 1 && roll <= 3) {
      return (Math.floor(Math.random() * 2) + 1 == 1 ? 'left' : 'right') + ' arm';
    } else if (roll >= 4 && roll <= 5) {
      return 'chest';
    } else if (roll >= 6 && roll <= 7) {
      return 'abdomen';
    } else if (roll >= 8 && roll <= 9) {
      return (Math.floor(Math.random() * 2) + 1 == 1 ? 'left' : 'right') + ' leg';
    }
  }

  static _damageDescription(damageAmount, hitLocation, resultDescr, isGMViewer) {
    let damageDescr = '';
    if (damageAmount <= 5) {
      damageDescr = 'superficial';
    } else if (damageAmount <= 13) {
      damageDescr = 'nasty';
    } else if (damageAmount <= 25) {
      damageDescr = 'grievous';
    } else if (damageAmount <= 43) {
      damageDescr = 'horrific';
    } else if (damageAmount > 43) {
      damageDescr = 'mortal';
    }
    damageDescr =
      (Math.floor(Math.random() * 2) + 1 == 1 ? 'inflicting' : 'causing') +
      ' a ' +
      damageDescr +
      ' wound' +
      (isGMViewer ? ' (' + damageAmount + ')' : '') +
      ' to the ' +
      hitLocation +
      '.';
    if (resultDescr == 'Failure') {
      damageDescr = 'but ' + damageDescr;
    }
    return damageDescr;
  }

  _postRender(html) {
    /*
    $(html)
      .find('div.lock')
      .click(function () {
        console.log('Handler for .click() called.');
      });
    */
  }

  /* -------------------------------------------- */

  /**
   * Handle submission of the Roll evaluation configuration Dialog
   * @param {jQuery} html             The submitted dialog content
   * @param {number} advantageMode    The chosen advantage mode
   * @private
   */
  _onDialogSubmit(html, button, skills) {
    const form = html[0].querySelector('form');
    skills.selected = skills.skills[form.selectedSkill.value];
    this.configureModifiers();
    return this;
  }
}

/* eslint-disable no-unused-vars */

/* -------------------------------------------- */
/* DUA Roll                                     */
/* -------------------------------------------- */

/**
 * A standardized helper function for handling core UA3 rolls.
 * Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
 * This chooses the default options of a normal attack with no bonus, Advantage, or Disadvantage respectively
 *
 * @param {object} data               Actor or item data against which to parse the roll
 *
 * @param {object} [skills]           The skills releveant to the roll
 * 
 * @param {boolean} [shift]           Apply a bonus or penalty shift to the roll
 * @param {boolean} [difficulty]      Apply a difficulty to the roll
 * @param {number} [critical]         The value of d20 result which represents a critical success
 * @param {number} [fumble]           The value of d20 result which represents a critical failure
 * @param {number} [targetValue]      Assign the target value against which the result should be compared
 * @param {boolean} [flipflop]        Allow the roll to be filp-flopped?
 * @param {boolean} [recheck]         Allow the roll to be re-checked on failure?
 
 * @param {boolean} [fastForward=false] Allow fast-forward selection
 * @param {Event} [event]             The triggering event which initiated the roll
 * @param {string} [rollMode]         A specific roll mode to apply as the default for the resulting roll
 * @param {string} [template]         The HTML template used to render the roll dialog
 * @param {string} [title]            The dialog window title
 * @param {Object} [dialogOptions]    Modal dialog options
 *
 * @param {boolean} [chatMessage=true] Automatically create a Chat Message for the result of this roll
 * @param {object} [messageData={}] Additional data which is applied to the created Chat Message, if any
 * @param {string} [rollMode]       A specific roll mode to apply as the default for the resulting roll
 * @param {object} [speaker]        The ChatMessage speaker to pass when creating the chat
 * @param {string} [flavor]         Flavor text to use in the posted chat message
 *
 * @return {Promise<DUARoll|null>}  The evaluated DUARoll, or null if the workflow was cancelled
 */

async function dUARoll({
  data,
  skills,
  damage,
  focus,
  aim,
  difficulty,
  fumble = 100,
  critical = 1,
  targetValue,
  flipflop,
  recheck,
  fastForward = false,
  event,

  isprivate = false,

  title,
  dialogOptions, // Dialog configuration

  chatMessage = true,
  messageData = {},
} = {}) {
  let isFF = fastForward || (event && (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey));

  let rollDifficulty = difficulty || 0;

  const roll = new CONFIG.Dice.DUARoll('1d100', data, {
    skills: skills,
    shifts: [],
    focus: focus,
    aim: aim,
    difficulty: rollDifficulty,
    flavor: messageData.flavor || title,
    critical,
    fumble,
    targetValue,
    flipflop,
    recheck,
  });

  isFF = isFF || skills.skills.length == 1;

  let hasHunch = skills.selected.hunch > 0;

  if (!isFF) {
    const configured = await roll.configureDialog(
      {
        title,
        skills,
        difficulty: rollDifficulty,
        hunch: skills.selected.hunch,
        defaultAbility: data?.item?.ability,
      },
      dialogOptions,
    );
    if (configured === null) return null;
  }

  let targetSkill = skills.selected;

  if (damage.attackUsing == 'firearms') {
    if (targetSkill.id == 'struggle') {
      damage.supressing = true;
    } else {
      const suppress = data.effects.contents.filter((obj) => obj.data.label === 'Suppress');
      if (suppress.length > 0) {
        damage.supressing = true;
      }
    }
  }

  let rollResult = 0;
  if (targetSkill.hunch > 0) {
    rollResult = Number(targetSkill.hunch);
  } else {
    // Evaluate the configured roll
    await roll.evaluate();
    rollResult = roll._total;
  }

  let isMagick = false;
  if (targetSkill.type == 'identity') {
    //let identity = data.system.identities.filter((obj) => obj.name === targetSkill.using);
    let identity = data.system.identities.filter((obj) => obj.id === targetSkill.id);
    if (identity.length > 0) {
      isMagick = identity[0].system.type != 'mundane';
    }
  }

  let targetMaximum = targetSkill.value + aim + focus;
  // adjust if the target is dodging
  if (damage.targetDodging) {
    if (damage.targetDodgeObsession || damage.targetDodge >= targetSkill.value) {
      targetMaximum -= 20;
    } else {
      targetMaximum -= 10;
    }
  }

  let targetMinimum = targetSkill.difficulty > rollDifficulty ? targetSkill.difficulty : rollDifficulty;

  if (targetMaximum > 99) {
    targetMaximum = 99;
  } else if (targetMaximum < 0) {
    targetMaximum = 0;
  }

  if (roll && chatMessage) {
    let chatFlags = {
      ua3: {
        type: 'DUARoll',
        chatData: {
          isMagick: isMagick,
          isGM: data.system.isGM || false,
          skillAction: skills.action,
          skillActionDescr: skills.actionDescr,
          skillTarget: skills.target.capitalize(),
          using: skills.action == 'check' ? targetSkill.using : skills.target.capitalize(),
          resultValue: rollResult,
          targetMinimum: targetMinimum,
          targetMaximum: targetMaximum,
          critical: critical,
          fumble: fumble,
          canRecheck: !hasHunch && (recheck || targetSkill.recheck),
          canFlipflop: !hasHunch && (flipflop || targetSkill.flipflop),
          damage: damage,
          spell: skills.spell,
          spelltype: skills.spelltype ?? '',
          randomPercent: [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1],
        },
      },
    };

    //console.log(chatFlags);

    ChatMessage.create({
      user: game.user.id,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER,
      sound: CONFIG.sounds.dice,
      content: '',
      //speaker: ChatMessage.getSpeaker(),
      //speaker: ChatMessage.getSpeaker({ alias: 'The Weave' }),
      speaker: ChatMessage.getSpeaker({ actor: data }),
      flags: chatFlags,
    }).then((chat) => {
      if (isprivate) {
        chat.applyRollMode(CONST.DICE_ROLL_MODES.PRIVATE);
      }
    });

    if (hasHunch) {
      // remove the expended Hunch
      let actor = data;
      let hunches = actor.system.hunches.filter((obj) => obj.flags.ua3.hunch === targetSkill.hunch);
      let changeKey = targetSkill.path + '.hunch';
      let hunch = null;

      if (hunches.length == 1) {
        hunch = hunches[0].id;
      } else {
        for (let i = 0; i < hunches.length; i++) {
          if (hunches[i].data.changes.filter((change) => change.key === changeKey).length > 0) {
            hunch = hunches[i].id;
            break;
          }
        }
      }
      if (hunch != null) {
        actor.deleteEffect(hunch);
      }
    }

    /*
    chat.then((card) => {
      let chatId = card.data._id;
      let msg = $('li.message[data-message-id="' + chatId + '"]');

      setTimeout(timed, 100);
      function timed() {
        msg.find('.flipflop').click(function () {
          console.log('Flip-flop!');
          console.log(chat.content);
        });
      }
    });
    */
  }

  /*
  if (roll && chatMessage) {
    messageData.flavor = '<b>' + (messageData.flavor || title) + '</b>';
    let msg = roll.toMessage(messageData);

    msg.then((value) => {
      let msgId = value.data._id;
      setTimeout(timedColor, 100);
      function timedColor() {
        let msg = $('li.message[data-message-id="' + msgId + '"]');
        msg.css('border-color', resultColor);
        msg.find('.dice-total').text(roll._total + ' - ' + resultDescr);
        $('li.message[data-message-id="' + msgId + '"] .message-content .dice-roll .dice-result .dice-formula').css(
          'display',
          'none',
        );
      }
    });
  }
  */
  return roll;
}

var dice = /*#__PURE__*/Object.freeze({
  __proto__: null,
  dUARoll: dUARoll,
  DUARoll: DUARoll
});

class ua3Actor extends Actor {
  prepareData() {
    super.prepareData();
    //const actorData = this;
  }

  /** @override */
  prepareBaseData() {
    const actorData = this;
    switch (actorData.type) {
      case 'character':
        return this._prepareCharacterData(actorData);
    }
  }

  /** @override */
  prepareDerivedData() {
    const actorData = this;
    const data = actorData.system;
    data.isGM = game.user.isGM;

    data.hasAdvancement = false;
    data.identities.forEach((identity) => {
      data.hasAdvancement = data.hasAdvancement || identity.system.xp;
    });

    if (!data.initiative) {
      data.initiative = {};
      data.initiative.fixed = false;
    }
    if (data.initiativeIdentity) {
      data.initiative.fixed = true;
      data.initiative.value = Number(data.initiativeIdentity.system.value);
    }
    if (!data.initiative.label) {
      data.initiative.label = 'Hand-to-hand combat';
    }
    if (!data.initiative.value) {
      data.initiative.value = data.ability.struggle.value;
    }
  }

  _deepValue(obj, path) {
    return new Function('o', 'return o.' + path)(obj);
  }

  setInitiative(value, label, type) {
    const update = {
      'system.initiative.value': value,
      'system.initiative.label': label,
      'system.initiative.type': type,
    };
    this.update(update);
  }

  applyCustomEffect(change) {
    //console.log('*** APPLYING CUSTOM EFFECT ***');
    //console.log(change);
    const actorData = this.system;
    // return the current value
    let targetValue = Number(new Function('o', 'return o.' + change.key)(this));

    let [operator, sourceType, skill] = change.value.split('/');
    let value = null;
    skill = actorData.skills[skill];
    switch (sourceType) {
      case 'i':
        value = Number(skill.system.value);
        break;
      case 'a':
        value = Number(skill.value);
        break;
    }

    let go = true;
    switch (operator) {
      case 'u':
        go = targetValue < value;
        break;
      case 'd':
        go = targetValue > value;
        break;
    }
    if (go) {
      let parts = change.key.split('.');
      let obj = this;
      for (let i = 0; i < parts.length; i++) {
        if (i == parts.length - 1) {
          obj[parts[i]] = value;
        } else {
          obj = obj[parts[i]];
        }
      }
    }
    //console.log(skill);

    // actor is the actor being processed and change a key/value pair
    //if (change.key !=== "data.attributes.ac.value") return;
    // If your active effect spec was
    // data.actor.attributes.ac.value (change.key) CUSTOM value (the value is not relevant here, but it gets passed as change.value)
    //const actorData = actor.system;
    //actorData.attributes.ac.value += Math.ceil((actorData.abilities.str.mod + actorData.abilities.dex.mod) / 2);
    // Although you can change fields other than the change.key field you should not as the core Active Effects tracks all changes made.
  }

  _prepareCharacterData(actorData) {
    const data = actorData.system;
    const items = actorData.items;
    actorData.flags.ua3 || {};
    const config = CONFIG.UA3;

    // identities
    data.identities = items.filter((i) => i.type === 'identity');

    // sort the identities: obsession, then descending rank
    data.identities.sort(function (a, b) {
      let a1 = a.system;
      let b1 = b.system;
      return b1.value * (b1.obsession ? 100 : 1) - a1.value * (a1.obsession ? 100 : 1);
    });
    data.obsessionIdentity = null;
    data.firearmsIdentity = null;
    data.initiativeIdentity = null;
    data.hasWeaponizedPhysique = false;

    data.skills = {};
    Object.keys(data.ability).forEach((key) => {
      data.skills[key] = data.ability[key];
    });

    data.isadept = false;
    data.school = null;
    data.isavatar = false;
    data.archetype = null;

    for (let i = 0; i < data.identities.length; i++) {
      let identity = data.identities[i];
      data['identity' + i] = identity;
      data.skills[identity.name] = identity;

      switch (identity.system.type) {
        case 'adept':
          data.adept = identity;
          var schools = items.filter((i) => i.type === 'school');
          if (schools.length > 0) {
            data.school = schools[0];
            data.isadept = true;
          }
          break;
        case 'avatar':
          data.avatar = identity;
          data.channels = [];
          var archetypes = items.filter((i) => i.type === 'archetype');
          if (archetypes.length > 0) {
            data.archetype = archetypes[0];
            data.isavatar = true;
            const channels = data.archetype.system.channels;
            Object.keys(channels).forEach((key) => {
              let channel = channels[key];
              if (data.avatar.system.value >= channel.minimum && channel.blurb != '' && channel.description != '') {
                data.channels.push(channel);
              }
            });
          }
          break;
      }

      data.showAdept = data.isadept;
      data.showAvatar = data.isavatar;
      data.showRituals = true;

      identity.changespath = 'identity' + i + '.system';

      if (identity.system.obsession) {
        data.obsessionIdentity = identity;
      }

      for (let f = 1; f <= 3; f++) {
        if (f == 1 || identity.system['feature' + f + 'active']) {
          identity['feature' + f + 'Ref'] = config.identityFeatures[identity.system['feature' + f]];
          let feature = identity['feature' + f + 'Ref'];
          if (feature && feature.target) {
            switch (feature.target) {
              case 'firearms':
                if (data.firearmsIdentity == null) {
                  data.firearmsIdentity = identity;
                } else if (identity.system.value > data.firearmsIdentity.system.value) {
                  data.firearmsIdentity = identity;
                }
                break;
              case 'initiative':
                if (data.initiativeIdentity == null) {
                  data.initiativeIdentity = identity;
                } else if (identity.system.value > data.initiativeIdentity.system.value) {
                  data.initiativeIdentity = identity;
                }
                break;
              case 'wounds':
                data.wounds.maximum = identity.system.value;
                break;
              case 'weaponizedphysique':
                data.hasWeaponizedPhysique = true;
                break;
            }
          }
        }
      }
    }
    data.canAddIdentity = data.identities.length < 4;

    // weapons
    data.weapons = this.getEmbeddedCollection('Item').filter((i) => i.type === 'weapon');

    // rituals
    data.rituals = items.filter((i) => i.type === 'ritual');
    data.rituals.sort(function (a, b) {
      return a.name.localeCompare(b.name)
    });

    //console.log(data);

    let effects = this.getEmbeddedCollection('ActiveEffect');

    // hunches
    data.hunches = effects.filter((obj) => obj.flags.ua3?.type === 'hunch');

    // effects
    data.effects = effects.filter((obj) => obj.flags.ua3?.type !== 'hunch');
  }

  _findIdentitiesWithFeature(name, action, target) {
    //this._findIdentitiesWithFeature('substituteConnect', null, null);
    //this._findIdentitiesWithFeature(null, 'protect', 'isolation');

    let result = [];
    var identities = this.getEmbeddedCollection('Item').filter((i) => i.type === 'identity');

    if (name) {
      result = identities.filter(
        (i) => i.system.feature1 === name || i.system.feature2 === name || i.system.feature3 === name,
      );
    } else {
      result = identities.filter(
        (i) =>
          (i.feature1Ref && i.feature1Ref.action === action && i.feature1Ref.target === target) ||
          (i.feature2Ref && i.feature2Ref.action === action && i.feature2Ref.target === target) ||
          (i.feature3Ref && i.feature3Ref.action === action && i.feature3Ref.target === target),
      );
    }
    // sort according to desc value
    result.sort(function (a, b) {
      let a1 = a.system;
      let b1 = b.system;
      return b1.value * (b1.obsession ? 100 : 1) - a1.value * (a1.obsession ? 100 : 1);
    });
    return result;
  }

  /*
  setMagickTab(tab) {
    let update = {};
    update['system.flags.broadcast'] = !this.system.charge.broadcast;
    this.update(update);
  }
  */

  async addCombatShift(type) {
    let label = '';
    let bonus = 0;
    let attackerBonus = 0;
    let descr = '';
    let duration = 1;
    let delay = 0;
    switch (type) {
      case 'prep':
        label = 'Preparing';
        bonus = 10;
        descr = 'Gain +10 to an action next Round';
        delay = 1;
        break;
      case 'focus10':
        label = 'Focus (+10)';
        bonus = 10;
        attackerBonus = 10;
        descr = 'Gain +10 to an action this Round. Your attackers also gain +10';
        break;
      case 'focus20':
        label = 'Focus (+20)';
        bonus = 20;
        attackerBonus = 20;
        descr = 'Gain +20 to an action this Round. Your attackers also gain +20';
        break;
      case 'focus30':
        label = 'Focus (+30)';
        bonus = 30;
        attackerBonus = 30;
        descr = 'Gain +20 to an action this Round. Your attackers also gain +20';
        break;
    }

    // check if a combat shift already exists, and enable it if necessary
    let effect = this.effects.find((e) => e.name === label);
    if (effect) {
      if (effect.disabled) {
        this.toggleEffect(effect.id);
      }
    } else {
      // a shift effect doesn't exist, so create one
      let extra = [];
      let flags = {
        'flags.ua3.type': type,
        'flags.ua3.bonus': bonus,
        'flags.ua3.duration': duration,
        'flags.ua3.delay': delay,
        'flags.ua3.attackerBonus': attackerBonus,
      };

      this.lostFocus();

      effect = this._buildEffect({
        label: label,
        type: '+', // bonus
        value: bonus,
        all: true,
        abilities: Object.keys(CONFIG.UA3.abilities),
        identities: this.system.identities.map((obj) => obj.id),
        disabled: false,
        descr: descr,
        extra: extra,
        flags: flags,
      });
    }
  }

  castSpell(type, spellid) {
    let isCheck = false;
    let identity = null;
    let spell = null;
    let msg = '';
    let ability = '';
    let title = '';
    let isFlipFlop = false;
    let checkOptions = {
      skills: [],
    };

    switch (type) {
      case 'adept': {
        spell = this.system.school.system.spells[spellid];
        isCheck = true;
        identity = this.system.adept;
        isFlipFlop = identity.system.obsession;
        ability = spell.name;
        title = spell.name;
        msg = 'casts <b>' + spell.name + '</b> to ' + spell.synopsis.charAt(0).toLowerCase() + spell.synopsis.slice(1);
        break;
      }
      case 'avatar': {
        const archetype = this.system.archetype;
        spell = archetype.system.channels[spellid];
        identity = this.system.avatar;
        isFlipFlop = identity.system.obsession;
        ability = spell.blurb;
        title = spell.blurb;
        isCheck = spell.avatarcheck;
        msg =
          'channels <b>' +
          archetype.name +
          '</b> to ' +
          spell.chattext.charAt(0).toLowerCase() +
          spell.chattext.slice(1);
        break;
      }
    }

    if (isCheck) {
      checkOptions.skills[0] = {
        type: 'identity',
        using: '',
        id: identity.id,
        value: identity.system.value,
        flipflop: isFlipFlop,
        recheck: false,
        difficulty: identity.system.difficulty,
        hunch: identity.system.hunch,
        path: identity.changespath,
        selected: true,
      };

      checkOptions.choose = false;
      checkOptions.action = 'check';
      checkOptions.actionDescr = msg;
      checkOptions.target = '';
      checkOptions.ability = ability;
      checkOptions.selected = checkOptions.skills.filter((skill) => skill.selected)[0];
      checkOptions.aim = this.system.combat.aim;
      checkOptions.focus = this.system.combat.focus;
      checkOptions.spelltype = type;
      checkOptions.spell = spell;

      dUARoll({
        data: this,
        skills: checkOptions,
        damage: {},
        focus: 0,
        aim: 0,
        difficulty: null,
        fumble: 100,
        critical: 1,
        targetValue: 50,
        flipflop: isFlipFlop,
        recheck: false,
        fastForward: true,
        event: null,
        template: null,
        title: title,
        dialogOptions: {}, // Dialog configuration
        chatMessage: true,
        messageData: {
          rollMode: null,
          speaker: null,
          flavor: null, // Chat Message customization
        },
      });
    } else {
      ChatMessage.create({
        user: game.user.id,
        type: CONST.CHAT_MESSAGE_TYPES.OOC,
        sound: CONFIG.sounds.notify,
        content: '<div style="text-align: center">' + msg + '</div>',
        speaker: ChatMessage.getSpeaker({ actor: this }),
        flags: {},
      });
    }
  }

  async deleteWeapon(weapon) {
    this.deleteEmbeddedDocuments('Item', [weapon]);
  }

  async deleteRitual(ritual) {
    this.deleteEmbeddedDocuments('Item', [ritual]);
  }

  toggleChargeBroadcast() {
    let update = {};
    update['system.charge.broadcast'] = !this.system.charge.broadcast;
    this.update(update);
  }

  adjustCharge(type, shift) {
    let adj = Number(this.system.charge[type]);
    let update = {};
    let msg = '';

    switch (shift) {
      case 'C':
        msg = 'converted a <b>Significant</b> charge into<br/>10 <b>Minor</b> charges.';
        update['system.charge.significant'] = adj - 1;
        update['system.charge.minor'] = Number(this.system.charge.minor) + 10;
        break;
      case 'T':
        msg = 'has tabooed and lost all their charges.<br/>Quel dommage.';
        update['system.charge.significant'] = 0;
        update['system.charge.minor'] = 0;
        break;
      default:
        if (shift > 0) {
          msg = 'generated a <b>' + type.capitalize() + '</b> charge.';
        }
        adj = adj + shift;
        if (adj < 0) {
          adj = 0;
        }
        update['system.charge.' + type] = adj;
    }

    if (!game.user.isGM && this.system.charge.broadcast && shift != '-1') {
      ChatMessage.create({
        user: game.user.id,
        type: CONST.CHAT_MESSAGE_TYPES.OOC,
        sound: CONFIG.sounds.notify,
        content: '<div style="text-align: center">' + msg + '</div>',
        speaker: ChatMessage.getSpeaker({ actor: this }),
        flags: { ua3: { type: 'BroadcastCharge' } },
      });
    }
    this.update(update);
  }

  currentPassion() {
    let result = '';
    Object.keys(CONFIG.UA3.passions).forEach((key) => {
      if (this.system.passion[key].triggered) {
        result = key;
        return;
      }
    });
    return result;
  }

  async addPassionEffect(passion) {
    let label = '';
    for (const [key, value] of Object.entries(CONFIG.UA3.passions)) {
      if (key == passion) {
        label = value;
      } else {
        // remove any other passion effects
        let effect = this.effects.find((e) => e.label === value);
        if (effect) {
          await this.deleteEffect(effect.id);
        }
      }
    }

    // check if a passion effect already exists, and enable it if necessary
    let effect = this.effects.find((e) => e.label === label);
    if (effect) {
      if (effect.disabled) {
        this.toggleEffect(effect.id);
      }
    } else {
      // a passion effect doesn't exist, so create one
      let extra = [
        {
          key: 'system.passion.' + passion + '.flipflop',
          value: true,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          priority: 0,
        },
      ];

      let flags = {
        'flags.ua3.type': 'passion',
        'flags.ua3.passion': passion,
      };

      effect = this._buildEffect({
        label: label,
        type: 'r', // recheck
        value: true,
        all: true,
        abilities: Object.keys(CONFIG.UA3.abilities),
        identities: this.system.identities.map((obj) => obj.id),
        disabled: false,
        descr: 'May reroll and flip-flop (once) while ' + label.toLowerCase(),
        extra: extra,
        flags: flags,
      });
    }
  }

  async toggleEffect(id) {
    let effect = this.effects.find((e) => e.id === id);
    if (game.user.isGM || effect.flags.ua3.pctoggle) {
      await this.updateEmbeddedDocuments('ActiveEffect', [{ _id: effect.id, disabled: !effect.disabled }]);
    }
  }

  async addEffectFromDialog(form) {
    form = form.elements;

    let all = form.effectAll.checked;
    let pcToggle = form.pcToggle.checked;
    let abilities = [],
      identities = [];

    if (form.effectIdentity) {
      identities = Array.from(form.effectIdentity)
        .filter((chk) => chk.checked)
        .map((obj) => obj.value);
    }

    if (all) {
      abilities = Object.keys(CONFIG.UA3.abilities);
    } else {
      abilities = Array.from(form.effectAbility)
        .filter((chk) => chk.checked)
        .map((obj) => obj.value);
    }

    this._buildEffect({
      label: form.effectName.value,
      type: form.effectType.value,
      value: form.effectValue.value,
      custom: form.effectCustom.value,
      all: all,
      abilities: abilities,
      identities: identities,
      disabled: false,
      flags: { 'flags.ua3.pctoggle': pcToggle },
    });
  }

  async _buildEffect({
    label,
    type,
    value = 0,
    custom = '',
    all = false,
    abilities = [],
    identities = [],
    disabled = false,
    descr = null,
    extra = [],
    flags = {},
  } = {}) {
    let changes = [];
    let mode = CONST.ACTIVE_EFFECT_MODES.OVERRIDE;
    let key = 'value';
    let tip = '';
    let priority = 0;

    switch (type) {
      case '+':
      case '-':
        value = type + '' + value;
        tip = 'Applies a ' + value + ' shift to %%';
        value = Number(value);
        mode = CONST.ACTIVE_EFFECT_MODES.ADD;
        break;

      case '>':
        tip = 'Upgrades %% to ' + value;
        value = Number(value);
        mode = CONST.ACTIVE_EFFECT_MODES.UPGRADE;
        break;

      case '<':
        tip = 'Downgrades %% to ' + value;
        value = Number(value);
        mode = CONST.ACTIVE_EFFECT_MODES.DOWNGRADE;
        break;

      case 'o':
        tip = 'Sets %% to ' + value;
        value = Number(value);
        mode = CONST.ACTIVE_EFFECT_MODES.OVERRIDE;
        break;

      case 'c':
        tip = 'Custom! ';
        value = custom;
        //value = '@data.identity0.system.value';
        mode = CONST.ACTIVE_EFFECT_MODES.CUSTOM;
        //mode = CONST.ACTIVE_EFFECT_MODES.OVERRIDE;
        break;

      case 'd':
        key = 'difficulty';
        value = Number(value);
        tip = 'Sets a difficulty of ' + value + ' on %%';
        mode = CONST.ACTIVE_EFFECT_MODES.UPGRADE;
        break;

      case 'f':
        key = 'flipflop';
        value = true;
        tip = 'Allows %% to be flip-flopped';
        mode = CONST.ACTIVE_EFFECT_MODES.OVERRIDE;
        break;

      case 'h':
        key = 'hunch';
        tip = 'Has a Hunch of ' + value + ' for %%';
        value = Number(value);
        flags['flags.ua3.type'] = 'hunch';
        flags['flags.ua3.hunch'] = value;
        priority =
          100 - this.getEmbeddedCollection('ActiveEffect').filter((obj) => obj.flags.ua3?.type === 'hunch').length;
        mode = CONST.ACTIVE_EFFECT_MODES.OVERRIDE;
        break;

      case 'r':
        key = 'recheck';
        value = true;
        tip = 'Allows re-rolls for %%';
        mode = CONST.ACTIVE_EFFECT_MODES.OVERRIDE;
        break;
    }

    let hint = [];

    for (let i = 0; i < abilities.length; i++) {
      let ability = abilities[i];
      hint.push(CONFIG.UA3.abilities[ability]);

      changes.push({
        key: 'system.ability.' + ability + '.' + key,
        value: value,
        mode: mode,
        priority: priority,
      });
      if (!all) {
        // add substitution identities
        this._findIdentitiesWithFeature(null, 'check', ability).forEach((identity) => {
          identities.push(identity.id);
        });
      }
    }

    let actorIdentities = this.system.identities;
    for (let i = 0; i < actorIdentities.length; i++) {
      if (identities.includes(actorIdentities[i].id) || all) {
        if (!all) {
          hint.unshift(actorIdentities[i].name);
        }

        changes.push({
          key: 'system.identity' + i + '.system.' + key,
          value: value,
          mode: mode,
          priority: priority,
        });
      }
    }

    // add any custom changes
    changes = changes.concat(extra);

    if (all && !descr) {
      tip = tip.replace('%%', 'all checks');
    } else if (hint.length == 1) {
      tip = tip.replace('%%', hint[0]);
    } else {
      const last = hint.pop();
      tip = tip.replace('%%', hint.join(', ') + ' and ' + last);
    }
    flags['flags.ua3.hint'] = descr || tip;

    return this._addEffect({ label, changes, disabled, flags });
  }

  async _editEffect(label) {
    let effect;
    if (label != null) {
      effect = this.effects.find((e) => e.name === label);
    } else {
      effect = await this.createEmbeddedDocuments('ActiveEffect', [{ label: 'Special Effect' }])[0];
      const sheet = new ActiveEffectConfig(effect);
      sheet.render(true);
    }
  }

  async _addEffect({ label, changes, disabled = false, flags = {} } = {}) {
    let param = [
      {
        name: label,
        //icon: 'icons/svg/aura.svg',
        origin: this.uuid,
        //'duration.rounds': 1,
        changes: changes,
        disabled: disabled,
      },
    ];

    if ('flags.ua3.duration' in flags) {
      param[0]['duration.rounds'] = flags['flags.ua3.duration'];
      //param[0]['duration.rounds'] = 1;
      param[0]['duration.turns'] = 0;
      //param[0]['duration.turns'] = flags['flags.ua3.duration'] + 1;
    }

    if ('flags.ua3.delay' in flags) {
      param[0]['duration.startRound'] = (game.combat?.round ? game.combat?.round : 1) + flags['flags.ua3.delay'];
      //param[0]['duration.startTurn'] = (game.combat?.turn ? game.combat?.turn : 1) + flags['flags.ua3.delay'];
      //param[0]['duration.startTurn'] = 0;
    }

    this.createEmbeddedDocuments('ActiveEffect', param).then((result) => {
      let effect = result[0];
      effect.update(flags);
      //console.log(this.effects[0].duration);
      //console.log(this.effects[0].isTemporary);
    });
  }

  async lostFocus() {
    const hitlist = ['Preparing', 'Focus (+10)', 'Focus (+20)', 'Focus (+30)'];
    const effects = this.effects.filter((e) => hitlist.includes(e.name));
    effects.forEach((effect) => this.deleteEffect(effect.id));
  }

  async deleteAllEffects() {
    this.deleteEmbeddedDocuments(
      'ActiveEffect',
      this.effects.map((ae) => ae.id),
    );
  }

  async deleteEffect(effect) {
    this.deleteEmbeddedDocuments('ActiveEffect', [effect]);
  }

  async deleteEffectOnName(name) {
    let effect = this.effects.find((e) => e.name === name);
    if (effect) {
      this.deleteEffect(effect.id);
    }
  }

  rollCheck(check, event) {
    const data = this.system;

    if (check.data('action') === 'protect') {
      this.lostFocus();
    }

    let targets = Array.from(game.user.targets);
    let targetMod = 0;

    let damage = {};
    if (check.data('weapon')) {
      damage.attackUsing = check.data('weapon');
      damage.isUnarmed = check.data('actiondescr').includes('unarmed');
      damage.method = check.data('damage');
      damage.maximum = Number(check.data('damagemax')) + Number(check.data('damagemodifier'));
      damage.autoOnMiss = Number(check.data('damagemissauto'));
      damage.woundType = check.data('woundtype');
      damage.weaponizedPhysique = data.hasWeaponizedPhysique;
      damage.supressing = false;
      damage.targetDodging = false;

      if (targets.length == 1) {
        const actor = targets[0].actor;
        if (actor.system.initiative.type == 'dodge') {
          damage.targetDodging = true;
          // find the target's dodge score and if it's an obsession
          damage.targetDodge = actor.system.ability.dodge.value;
          damage.targetDodgeObsession = false;
          actor._findIdentitiesWithFeature(null, 'check', 'dodge').forEach((identity) => {
            if (identity.system.value > damage.targetDodge) {
              damage.targetDodge = identity.system.value;
            }
            damage.targetDodgeObsession = damage.targetDodgeObsession || identity.system.obsession;
          });
        }
      }
    }

    if (targets.length == 1) {
      const effects = targets[0].actor.system.effects;
      // find any focus effect
      let focus = effects.find((effect) => effect.name.startsWith('Focus'));
      if (focus) {
        targetMod = focus.flags.ua3.attackerBonus;
      }
    }

    let checkOptions = {};
    if (check.data('type') == 'relationship') {
      let relationship = data.relationship[check.data('target')];
      checkOptions.skills = [];
      checkOptions.skills[0] = {
        type: check.data('type'),
        using: '',
        id: check.data('target'),
        value: relationship.value,
        flipflop: relationship.flipflop,
        recheck: relationship.recheck,
        difficulty: relationship.difficulty,
        hunch: relationship.hunch,
        path: 'relationship.' + check.data('target'),
        selected: true,
      };
    } else {
      checkOptions.skills = this.getCheckOptions(check, damage.attackUsing == 'firearms');
    }
    checkOptions.choose = checkOptions.skills.length > 1;
    checkOptions.action = check.data('action');
    checkOptions.actionDescr = check.data('actiondescr');
    checkOptions.target = check.data('target');
    checkOptions.ability = check.data('check');
    checkOptions.selected = checkOptions.skills.filter((skill) => skill.selected)[0];
    checkOptions.aim = data.combat.aim;
    checkOptions.focus = data.combat.focus + targetMod;

    // can recheck?
    let recheck = data.passion.rage.triggered || data.passion.fear.triggered || data.passion.noble.triggered;

    // can flipflop
    let flipflop =
      (data.passion.rage.triggered && data.passion.rage.flipflop) ||
      (data.passion.fear.triggered && data.passion.fear.flipflop) ||
      (data.passion.noble.triggered && data.passion.noble.flipflop);

    return dUARoll({
      data: this,
      skills: checkOptions,
      damage: damage,
      focus: data.combat.focus + targetMod,
      aim: check.data('weapon') ? data.combat.aim : 0,
      difficulty: null,
      fumble: 100,
      critical: 1,
      targetValue: 50,
      flipflop: flipflop,
      recheck: recheck,
      fastForward: false,
      event: event,
      template: null,
      title: checkOptions.action.capitalize() + ' ' + checkOptions.target.capitalize(),
      dialogOptions: {}, // Dialog configuration
      chatMessage: true,
      messageData: {
        rollMode: null,
        speaker: null,
        flavor: null, // Chat Message customization
      },
    });
  }

  getCheckOptions(check, needsFirearms) {
    let options = [];
    let opt = 0;
    let identity = null;

    if (needsFirearms && this.system.firearmsIdentity) {
      identity = this.system.firearmsIdentity;
      options[opt] = {
        type: check.data('type'),
        using: identity.name,
        id: identity.id,
        value: identity.system.value,
        flipflop: identity.system.obsession || identity.system.flipflop,
        recheck: identity.system.recheck,
        difficulty: identity.system.difficulty,
        hunch: identity.system.hunch,
        path: identity.changespath,
        selected: true,
      };
    } else {
      switch (check.data('type')) {
        case 'identity':
          // just return the identity
          identity = this.getEmbeddedDocument('Item', check.data('id'));
          options[opt] = {
            type: check.data('type'),
            using: identity.name,
            id: identity.id,
            value: identity.system.value,
            flipflop: identity.system.obsession || identity.system.flipflop,
            recheck: identity.system.recheck,
            difficulty: identity.system.difficulty,
            hunch: identity.system.hunch,
            path: identity.changespath,
            selected: true,
          };
          break;

        case 'ability':
          var ability = check.data('check');
          var action = check.data('action');
          var target = check.data('target');
          var choice = this.system.ability[ability];

          // add the ability
          options[opt++] = {
            type: check.data('type'),
            using: CONFIG.UA3.abilities[ability],
            id: ability,
            value: choice.value,
            flipflop: choice.flipflop,
            recheck: choice.recheck,
            difficulty: choice.difficulty,
            hunch: choice.hunch,
            path: 'ability.' + ability,
            selected: true,
          };

          // find all identities that substitute for the ability check
          var identities = this._findIdentitiesWithFeature(null, action, target);
          for (var i = 0; i < identities.length; i++) {
            choice = identities[i].system;
            options[opt++] = {
              type: 'identity',
              using: identities[i].name,
              id: identities[i].id,
              value: choice.value,
              flipflop: choice.obsession || choice.flipflop,
              recheck: choice.recheck,
              difficulty: choice.difficulty,
              hunch: choice.hunch,
              path: choice.changespath,
              selected: true,
            };
          }
          options[0].selected = identities.length == 0;

          // sort according to desc value
          options.sort(function (a, b) {
            return b.value - a.value;
          });
          break;
      }
    }

    return options;
  }
}

class ua3Item extends Item {
  prepareData() {
    super.prepareData();

    // Get the Item's data
    //const itemData = this;
    //const actorData = this.actor ? this.actor : {};
    //const data = itemData.system;
    //const C = CONFIG.UA3;

    //CONFIG.debug.hooks = true;
  }

  /** @override */
  prepareBaseData() {
    switch (this.type) {
      case 'identity':
        return this._prepareIdentityData(this);
      case 'weapon':
        return this._prepareWeaponData(this);
      case 'archetype':
        return this._prepareArchetypeData(this);
      case 'school':
        return this._prepareSchoolData(this);
      case 'ritual':
        return this._prepareRitualData(this);
      }
  }

  /** @override */
  prepareDerivedData() {
    //data.isadmin = game.isAdmin();

    switch (this.type) {
      case 'school':
        return this._prepareSchoolDerivedData(this.system, this.actor);
    }
  }

  /* -------------------------------------------- */
  /*  Data Preparation Helpers                    */
  /* -------------------------------------------- */

  _prepareIdentityData(itemData) {
    const data = itemData.system;
    const config = CONFIG.UA3;
    this.actor;

    let type = config.identityTypes[data.type];

    let update = {};
    switch (type.features.max) {
      case 1:
        if (data.feature2active) {
          update['system.feature2'] = '';
          update['system.feature2active'] = false;
        }
        if (data.feature3active) {
          update['system.feature3'] = '';
          update['system.feature3active'] = false;
        }
        break;
      case 2:
        if (!data.feature2active) {
          update['system.feature2active'] = true;
        }
        if (data.feature3active) {
          update['system.feature3'] = '';
          update['system.feature3descr'] = '';
          update['system.feature3active'] = false;
        }
        break;
      case 3:
        if (!data.feature2active) {
          update['system.feature2active'] = true;
        }
        if (!data.feature3active) {
          update['system.feature3active'] = true;
        }
        break;
    }

    data.feature1lock = false;
    data.feature2lock = false;
    let featureOptions = [];
    let featureOptionsSpecial = [];

    for (var key in config.identityFeatures) {
      let feature = config.identityFeatures[key];
      if (feature.types.includes(data.type)) {
        let include = (data.type == 'mundane' && feature.action == 'check') || data.type != 'mundane';
        featureOptions.push({ key: key, label: feature.name, include: include });
        if (include) {
          featureOptionsSpecial.push({ key: key, label: feature.name, include: include });
        }
      }
    }
    data.featureOptions = featureOptions;
    data.featureOptionsSpecial = featureOptionsSpecial;

    switch (data.type) {
      case 'mundane':
        if (data.feature1 == '' || config.identityFeatures[data.feature1].action != 'check') {
          update['system.feature1'] = '';
        }
        break;
      case 'supernatural':
        if (data.feature1 == '' || !config.identityFeatures[data.feature1].types.includes('supernatural')) {
          update['system.feature1'] = '';
        }
        break;
      case 'adept':
      case 'avatar':
        data.feature1lock = true;
        data.feature2lock = true;

        if (data.feature1 != 'castsRituals') {
          update['system.feature1'] = 'castsRituals';
        }
        if (data.feature2 != 'gutterMagick') {
          update['system.feature2'] = 'gutterMagick';
        }
        break;
    }

    if (Object.keys(update).length !== 0 && itemData._id) {
      this.update(update);
    }

    if (data.feature1 != '') {
      data.feature1descr = config.identityFeatures[data.feature1].descr;
    }
    if (data.feature2 != '') {
      data.feature2descr = config.identityFeatures[data.feature2].descr;
    }
    if (data.feature3 != '') {
      data.feature3descr = config.identityFeatures[data.feature3].descr;
    }
  }

  _prepareWeaponData(itemData) {
  }

  _prepareArchetypeData(itemData) {
  }

  _prepareRitualData(itemData) {
  }

  _prepareSchoolData(itemData) {
    const data = itemData.system;
    data.spellType = {};
    data.spellType.minor = [];
    data.spellType.significant = [];
    let spells = data.spells || {};
    Object.keys(spells).forEach((key) => {
      spells[key].id = key;
      data.spellType[spells[key].chargetype].push(spells[key]);
    });

    data.spellType.minor.sort((a, b) =>
      a.charges > b.charges ? 1 : a.charges === b.charges ? (a.name > b.name ? 1 : -1) : -1,
    );

    data.spellType.significant.sort((a, b) =>
      a.charges > b.charges ? 1 : a.charges === b.charges ? (a.name > b.name ? 1 : -1) : -1,
    );
  }

  _prepareSchoolDerivedData(data, actor) {
    if (actor != null) {
      let actorCharges = actor.system.charge;
      let significant = Number(actorCharges.significant);
      let minor = significant * 10 + Number(actorCharges.minor);
      let spells = data.spells;

      Object.keys(spells).forEach((key) => {
        let spell = spells[key];
        let charges = Number(spell.charges);
        switch (spell.chargetype) {
          case 'minor':
            spell.available = charges <= minor;
            //console.log(spell.name + ': ' + spells[key].available);
            //spell.chargeextra = true;
            break;
          case 'significant':
            spells[key].available = charges <= significant;
            break;
        }
      });
    }
  }
}

class ua3ActorSheet extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['ua3', 'sheet', 'actor'],
      width: 1100,
      height: 800,
      resizable: false,
      tabs: [
        { navSelector: '.tabbed', contentSelector: '.tab-content', initial: 'character' },
        { navSelector: '.magick-nav', contentSelector: '.magick-content', initial: 'ritual' },
        { navSelector: '.school-nav', contentSelector: '.school-content', initial: 'philosophy' },
        { navSelector: '.spell-nav', contentSelector: '.spell-content', inital: 0 },
        { navSelector: '.ritual-nav', contentSelector: '.ritual-content', inital: 0 },
      ],
    });
  }

  /** @override */
  get template() {
    const path = 'systems/ua3/templates/actor';

    // return a unique item sheet by type, like `weapon-sheet.html or hbs (for handlebars)`.
    return `${path}/${this.actor.type}-sheet.hbs`;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    // Merging into our object return rather than reassigning
    foundry.utils.mergeObject(context, {
      system: this.actor.system,
      config: CONFIG.UA3,
    });
    //console.log(context);

    return context;
    /*
    const data = super.getData(options);
    const actorData = data.data;
    data.config = CONFIG.UA3;

    // Re-define the template data references (backwards compatible)
    data.actor = actorData;
    data.data = actorData.data;

    //console.log(data);
    return data;
    */
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find('.sheet-body');
    const bodyHeight = position.height - 192;
    sheetBody.css('height', bodyHeight);
    return position;
  }

  get itemContextMenu() {
    return [
      {
        name: 'Edit',
        icon: '<i class="fas fa-edit"></i>',
        callback: (element) => {
          this._editIdentity(element);
        },
      },
      {
        name: 'Delete',
        icon: '<i class="fas fa-trash"></i>',
        callback: (element) => {
          this._deleteIdentity(element);
        },
      },
    ];
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    html.find('.stress').click(this._listenStressGauges.bind(this));
    html.find('.dicecheck').click(this._listenDiceCheck.bind(this));
    html.find('.passion').click(this._listenPassion.bind(this));
    html.find('.xp').click(this._listenXP.bind(this));
    html.find('.adjustCharge').click(this._listenAdjustCharge.bind(this));
    html.find('.broadcastCharge').dblclick(this._listenBroadcastCharge.bind(this));
    html.find('.setInitiative').click(this._listenSetInitiative.bind(this));
    html.find('.enactTaboo').click(this._listenTaboo.bind(this));
    html.find('.castSpell').click(this._listenCastSpell.bind(this));
    html.find('.toggleEffect').on('click', (event) => this._listenToggleEffect(event, html));
    html.find('.doAdvance').click(this._listenAdvance.bind(this));

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    if (game.user.isGM) {
      new ContextMenu(html, '.identity', this.itemContextMenu);
      html.find('.addIdentity').on('click', (event) => this._listenAddIdentity(event, html));
      html.find('.addEffect,.addHunch').on('click', (event) => this._listenAddEffect(event, html));
      html.find('.deleteEffect,.deleteHunch').on('click', (event) => this._listenDeleteEffect(event, html));
      html.find('.specialEffect,.toggleEffect').on('dblclick', (event) => this._listenSpecialEffect(event, html));
      html.find('.deleteWeapon').on('click', (event) => this._listenDeleteWeapon(event, html));
      html.find('.deleteRitual').on('click', (event) => this._listenDeleteRitual(event, html));
      html.find('.actorFlag').on('click', (event) => this._listenActorFlag(event, html));
    }
  }

  async _listenAdvance(event) {
    event.preventDefault();
    const data = this.actor.system;
    const update = [];
    data.identities.forEach((identity) => {
      if (identity.system.xp) {
        const current = Number(identity.system.value);
        let increase = identity.system.value + Math.floor(Math.random() * 5) + 1;
        increase = increase > 99 ? 99 : increase;
        const msg =
          '<span style="text-align: left"><b>' +
          identity.name +
          '</b> Identity improved from ' +
          current +
          ' to ' +
          increase +
          '</span>';
        update.push({
          _id: identity.id,
          'system.value': increase,
          'system.xp': false,
        });
        ChatMessage.create({
          user: game.user.id,
          type: CONST.CHAT_MESSAGE_TYPES.OOC,
          sound: CONFIG.sounds.notify,
          content: '<div style="text-align: center">' + msg + '</div>',
          speaker: ChatMessage.getSpeaker({ actor: this.actor }),
          flags: { ua3: { type: 'BroadcastXP' } },
        });
      }
    });
    this.actor.updateEmbeddedDocuments('Item', update);
  }

  async _listenActorFlag(event) {
    event.preventDefault();
    const update = {};
    let flag = $(event.currentTarget)[0];
    update['system.flags.' + flag.id] = flag.checked;
    switch (flag.id) {
      case 'isNameKnown': {
        update['prototypeToken.displayName'] = flag.checked
          ? CONST.TOKEN_DISPLAY_MODES.ALWAYS
          : CONST.TOKEN_DISPLAY_MODES.OWNER;
      }
    }
    this.actor.update(update);
  }

  async _listenCastSpell(event) {
    event.preventDefault();
    this.actor.castSpell($(event.currentTarget).data('type'), $(event.currentTarget).data('spellid'));
  }

  async _listenTaboo(event) {
    event.preventDefault();
    const context = $(event.currentTarget).data('type');
    let msg = '';
    switch (context) {
      case 'adept':
        msg =
          "Did you really just fuck up and taboo? That's going to cost you all of your charges. Select 'Yes' to embrace the suck.";
        break;
      case 'avatar':
        msg =
          "Did you really just fuck up and taboo? That's going hurt your connection the Archetype. Select 'Yes' to embrace the suck.";
        break;
    }
    new Dialog({
      title: 'Wow, just... wow',
      content: '<div style="padding: 7px; margin-bottom: 10px">' + msg + '</div>',
      buttons: {
        yes: {
          icon: '<i class="fas fa-check"></i>',
          label: 'Yes, that was me',
          callback: () => {
            switch (context) {
              case 'adept':
                this.actor.adjustCharge('minor', 'T');
                break;
              case 'avatar':
                var drop = this.actor.system.avatar.system.value - (Math.trunc(5 * Math.random()) + 1);
                var identity = this.actor.items.filter((idn) => idn.name == this.actor.system.avatar.name);
                if (identity.length > 0) {
                  identity = identity[0];
                  let update = {
                    'system.value': drop,
                  };
                  identity.update(update);

                  const msg =
                    'has tabooed and weakened their connection to <b>' + this.actor.system.archetype.name + '</b>.';

                  ChatMessage.create({
                    user: game.user.id,
                    type: CONST.CHAT_MESSAGE_TYPES.OOC,
                    sound: CONFIG.sounds.notify,
                    content: '<div style="text-align: center">' + msg + '</div>',
                    speaker: ChatMessage.getSpeaker({ actor: this.actor }),
                    flags: { ua3: { type: 'BroadcastCharge' } },
                  });
                }
                break;
            }
          },
        },
        no: {
          icon: '<i class="fas fa-times"></i>',
          label: "No, we're cool",
        },
      },
    }).render(true);
  }

  async _listenSetInitiative(event) {
    event.preventDefault();
    const TEMPLATE = 'systems/ua3/templates/chat/initiative-dialog.hbs';
    const actor = this.actor.system;
    let data = {
      action: [],
    };
    let options = [];

    if (actor.isadept) {
      options = [
        'Do some ' + actor.adept.name + ' shit',
        'Cut loose with some ' + actor.adept.name + ' stuff',
        'Cast a ' + actor.adept.name + ' spell',
        'Do some awesome ' + actor.adept.name + ' magick',
      ];
      data.action.push({
        label: options[(options.length * Math.random()) | 0],
        value: actor.adept.system.value,
        type: 'magick',
      });
    }
    if (actor.isavatar) {
      const archetype = actor.archetype.name.replace(/^the /gi, '');
      options = [
        'Do some mystical ' + archetype + ' shit',
        'Cut loose with some ' + archetype + ' stuff',
        'Channel some weird ' + archetype + ' power',
        'Perform an awesome ' + archetype + ' effect',
      ];
      data.action.push({
        label: options[(options.length * Math.random()) | 0],
        value: actor.avatar.system.value,
        type: 'magick',
      });
    }

    let struggle = actor.ability.struggle.value;
    this.actor._findIdentitiesWithFeature(null, 'check', 'struggle').forEach((identity) => {
      if (identity.system.value > struggle) {
        struggle = identity.system.value;
      }
    });
    options = ['Hand-to-hand combat', 'Engage in fisticuffs', 'Time for physical violence', 'Hit somebody!'];
    data.action.push({
      label: options[(options.length * Math.random()) | 0],
      value: struggle,
      default: true,
      type: 'struggle',
    });

    const weapons = actor.weapons.filter((wpn) => wpn.system.attackWith == 'firearms');
    if (weapons.length > 0) {
      options = ['Shoot someone!', 'Put that gun to use', "Bust a cap in someone's ass"];
      let value = struggle;
      if (actor.firearmsIdentity != null) {
        value = actor.firearmsIdentity.system.value;
      }
      data.action.push({
        label: options[(options.length * Math.random()) | 0],
        value: value,
        type: 'firearms',
      });
    }

    data.action.push({
      label: 'Prepare for the next round',
      value: struggle,
      type: 'prep',
    });

    let value = actor.ability.dodge.value;
    this.actor._findIdentitiesWithFeature(null, 'check', 'dodge').forEach((identity) => {
      if (identity.system.value > value) {
        value = identity.system.value;
      }
    });
    options = ["Just try to stay out of harm's way", 'Try not to get hurt', 'Bob and weave', 'Dodge!'];
    data.action.push({
      label: options[(options.length * Math.random()) | 0],
      value: value,
      type: 'dodge',
    });

    value = actor.ability.pursuit.value;
    this.actor._findIdentitiesWithFeature(null, 'check', 'pursuit').forEach((identity) => {
      if (identity.system.value > value) {
        value = identity.system.value > value;
      }
    });
    options = ['Run away!', 'Nope the hell outta this fight', 'Run like hell'];
    data.action.push({
      label: options[(options.length * Math.random()) | 0],
      value: value,
      type: 'flee',
    });

    options = ['Do something unexpected', 'Do something off-menu', "Let's try this..."];
    data.action.push({
      label: options[(options.length * Math.random()) | 0],
      value: null,
      input: true,
      type: 'custom',
    });

    const content = await renderTemplate(TEMPLATE, data);

    options = [
      'Oh, Shit! Oh, Shit!',
      "We're Fucked",
      'Oh, Crap!',
      "This Isn't Going to End Well...",
      "It's Going Down!",
    ];
    new Dialog({
      title: options[(options.length * Math.random()) | 0],
      content: content,
      buttons: {
        yes: {
          icon: '<i class="fas fa-thumbs-up"></i>',
          label: "Let's Do This!",
          callback: (html) => {
            const form = $(html[0].querySelector('form'));
            const selected = form.find('[name="action"]:checked');
            const focus = form.find('[name="setFocus"]:checked');
            let value = selected.attr('value');
            const label = selected.next('span').text();
            const type = selected.data('type');
            if (value == 'custom') {
              const custom = form.find('input[name="custom"]');
              value = custom.val() != '' ? custom.val() : actor.ability.struggle.value;
            }
            this.actor.setInitiative(value, label, type);

            switch (type) {
              case 'prep':
                this.actor.addCombatShift(type);
                break;
              default:
                if (focus.val() != 0) {
                  this.actor.addCombatShift('focus' + focus.val());
                }
            }
          },
        },
      },
    }).render(true);
  }

  async _listenDeleteWeapon(event, html) {
    event.preventDefault();
    let weapon = $(event.currentTarget).data('id');
    this.actor.deleteWeapon(weapon);
  }

  async _listenDeleteRitual(event, html) {
    event.preventDefault();
    let ritual = $(event.currentTarget).data('id');
    this.actor.deleteRitual(ritual);
  }

  async _listenSpecialEffect(event, html) {
    event.preventDefault();
    let id = $(event.currentTarget).data('id');
    if (!id) {
      this.actor
        .createEmbeddedDocuments('ActiveEffect', [
          {
            name: 'New Effect',
            origin: this.actor.uuid,
            disabled: true,
          },
        ])
        .then((result) => {
          let effect = result[0];
          const sheet = new ActiveEffectConfig(effect);
          sheet.render(true);
        });
    } else {
      let effect = this.actor.effects.find((e) => e.id === id);
      const sheet = new ActiveEffectConfig(effect);
      sheet.render(true);
    }

    /*
    let effects = this.actor.getEmbeddedCollection('ActiveEffect');
    if (effects.contents.length > 0) {
      const sheet = new ActiveEffectConfig(effects.contents[0]);
      sheet.render(true);
    }
    */
  }

  async _onDropItem(event, data) {
    const item = await fromUuid(data.uuid);
    const actor = this.actor;

    switch (item.type) {
      case 'school':
      case 'archetype':
          // there can be only one!
        actor.deleteEmbeddedDocuments(
          'Item',
          actor.items.filter((doc) => doc.type == item.type).map((obj) => obj.id),
        );
        actor.createEmbeddedDocuments('Item', [foundry.utils.duplicate(item)]);
        break;
      case 'weapon':
      case 'ritual':
          // only one of each type
        if (actor.items.filter((doc) => doc.type == item.type && doc.name == item.name).length > 0) {
          return;
        }
        actor.createEmbeddedDocuments('Item', [foundry.utils.duplicate(item)]);
        break;
    }
  }

  async _listenBroadcastCharge(event) {
    this.actor.toggleChargeBroadcast();
  }

  async _listenAdjustCharge(event) {
    event.preventDefault();
    let src = $(event.currentTarget);
    if (src.data('action') == 'C') {
      new Dialog({
        title: 'You Sure About That?',
        content:
          '<div style="padding: 7px; margin-bottom: 10px">' +
          "Are you really sure you want to convert a <b>Significant</b> charge into 10 <b>Minor</b> charges? This can't be reversed.</div>",
        buttons: {
          yes: {
            icon: '<i class="fas fa-check"></i>',
            label: 'Yes',
            callback: () => {
              this.actor.adjustCharge('significant', 'C');
            },
          },
          no: {
            icon: '<i class="fas fa-times"></i>',
            label: 'No',
          },
        },
      }).render(true);
    } else {
      this.actor.adjustCharge(src.data('target'), Number(src.data('action') + '1'));
    }
  }

  async _listenToggleEffect(event) {
    event.preventDefault();
    let id = $(event.currentTarget).data('id');
    this.actor.toggleEffect(id);
  }

  async _listenDeleteEffect(event) {
    event.preventDefault();
    let effect = $(event.currentTarget).data('id');
    this.actor.deleteEffect(effect);
  }

  async _listenAddEffect(event) {
    event.preventDefault();
    let source = $(event.currentTarget);
    let isHunch = source.hasClass('addHunch');
    let actor = this.actor;

    let choices = {
      context: isHunch ? 'hunch' : 'effect',
      label: isHunch ? 'Hunch' : '',
      ishunch: isHunch,
      identity: {},
      ability: {},
    };
    for (let i = 0; i < actor.system.identities.length; i++) {
      choices.identity[actor.system.identities[i].id] = {
        label: actor.system.identities[i].name,
        type: 'identity',
      };
    }
    for (const [key, value] of Object.entries(CONFIG.UA3.abilities)) {
      choices.ability[key] = {
        label: value,
        type: 'ability',
      };
    }
    const EFFECT_TEMPLATE = 'systems/ua3/templates/actor/effect-dialog.hbs';
    // Render the Dialog inner HTML
    const content = await renderTemplate(EFFECT_TEMPLATE, {
      choices,
    });

    // Create the Dialog window and await submission of the form
    new Promise((resolve) => {
      new Dialog({
        title: isHunch ? 'Add a Hunch' : 'Add an Effect',
        content: content,
        buttons: {
          add: {
            label: 'Add',
            callback: (html) => {
              this.actor.addEffectFromDialog(html[0].querySelector('form'));
            },
          },
        },
        default: 'add',
        render: (html) => this._listenEffectValidate(html),
        close: () => resolve(null),
      }).render(true);
    });
  }

  async _listenEffectValidate(html) {
    let ishunch = html.find('form').data('context') === 'hunch';
    if (!ishunch) {
      html.find('input[name=effectName]').focus();
    }
    html.find('button').prop('disabled', true);

    html.find('input[type=checkbox][name!=pcToggle],input[type=radio]').on('change', (event) => {
      this.validateEffectDialog(html, event);
    });

    html.find('input[type=text],input[type=number]').on('keyup', (event) => {
      this.validateEffectDialog(html, event);
    });

    html.find('.generateHunch').on('click', (event) => {
      html.find('input[name=effectValue]').val(Math.floor(Math.random() * 100) + 1);
      this.validateEffectDialog(html, event);
    });

    // prep the validation
    html.find('input[name=effectValue]').trigger('keyup');
  }

  async validateEffectDialog(html, event) {
    let source = $(event.currentTarget);
    let ok = false;
    let ishunch = html.find('form').data('context') === 'hunch';
    let effectValue = html.find('input[name=effectValue');
    let customValue = html.find('input[name=effectCustom');
    let label = html.find('input[name=effectName]');

    ok = label.val().length >= 3;
    let isCustom = false;

    switch (html.find('input[name=effectType]:checked').val()) {
      case '+':
      case '-':
      case 'd':
      case 'h':
      case '>':
      case '<':
      case 'o':
        ok = ok && effectValue.val() != '';
        customValue.val('');
        break;
      case 'c':
        isCustom = true;
        ok = ok && customValue.val() != '';
        effectValue.val('');
        break;
      default:
        customValue.val('');
        effectValue.val('');
    }

    html.find('.valueInp').toggle(!isCustom);
    html.find('.customInp').toggle(isCustom);

    if (ishunch) {
      if (source.prop('type') == 'checkbox') {
        if (source.is(':checked')) {
          html.find('.targets input[type=checkbox]:not([value=' + source.attr('value') + '])').prop('checked', false);
          label.val(source.next().text());
        } else {
          label.val('Hunch');
          ok = false;
        }
      }
    } else {
      if (html.find('.targets input[name=effectAll]').is(':checked')) {
        html.find('.targets input[name=effectIdentity]').prop('checked', false).prop('disabled', true);
        html.find('.targets input[name=effectAbility]').prop('checked', false).prop('disabled', true);
        ok = ok && true;
      } else if (html.find('.targets input[name=effectIdentity]:checked').length) {
        html.find('.targets input[name=effectAbility]').prop('checked', false).prop('disabled', true);
      } else if (html.find('.targets input[name=effectAbility]:checked').length) {
        html.find('.targets input[name=effectIdentity]').prop('checked', false).prop('disabled', true);
      } else {
        html.find('.targets input[name=effectIdentity]:disabled').prop('disabled', false);
        html.find('.targets input[name=effectAbility]:disabled').prop('disabled', false);
      }
    }
    html.find('button').prop('disabled', !ok);
  }

  async _listenDeleteHunch(event) {
    event.preventDefault();
    let hunch = $(event.currentTarget).data('id');
    this.actor.deleteHunch(hunch);
  }

  /*
  async _listenAddHunch(event) {
    // REDUNDANT - CAN DELETE
    event.preventDefault();
    let hunches = this.actor.system.hunches;
    let choices = {};
    if (!('any' in hunches)) {
      choices.any = {
        label: 'Any',
        type: 'any',
      };
    }

    for (const [key, value] of Object.entries(CONFIG.UA3.abilities)) {
      if (!(key in hunches)) {
        choices[key] = {
          label: value,
          type: 'ability',
        };
      }
    }
    const HUNCH_TEMPLATE = 'systems/ua3/templates/actor/hunch-dialog.hbs';
    // Render the Dialog inner HTML
    const content = await renderTemplate(HUNCH_TEMPLATE, {
      choices,
    });

    // Create the Dialog window and await submission of the form
    new Promise((resolve) => {
      new Dialog({
        title: 'Add a Hunch',
        content: content,
        buttons: {
          add: {
            label: 'Add',
            callback: (html) => {
              let form = html[0].querySelector('form');
              let value = form.hunchValue.value;
              if (value != '') {
                this.actor.addHunch(form.hunchTarget.value, value);
              }
            },
          },
        },
        default: 'add',
        close: () => resolve(null),
      }).render(true);
    });
  }
  */

  _listenXP(event) {
    event.preventDefault();
    let identity = this.actor.items.get($(event.currentTarget).data('id'));
    let update = {};

    update['system.xp'] = !identity.system.xp;
    identity.update(update);
  }

  _listenPassion(event) {
    event.preventDefault();
    let passion = $(event.currentTarget).data('id');
    let data = this.actor.system.passion;

    // don't allow another passion to be triggered while one is active
    let go = true;
    Object.keys(CONFIG.UA3.passions).forEach((key) => {
      if (key != passion) {
        go = go && !data[key].triggered;
      }
    });
    if (!go) {
      return;
    }

    let update = {};

    if (data[passion].triggered) {
      update['system.passion.' + passion + '.triggered'] = false;
      this.actor.deleteEffectOnName(CONFIG.UA3.passions[passion]);
    } else {
      update['system.passion.' + passion + '.triggered'] = true;
      this.actor.addPassionEffect(passion);
    }
    this.actor.update(update);
  }

  _listenDiceCheck(event) {
    event.preventDefault();
    let check = $(event.currentTarget);
    this.actor.rollCheck(check, event);
  }

  async _deleteIdentity(element) {
    const identity = $(element);
    let itemId = identity.attr('itemid');
    let applyChanges = false;
    new Dialog({
      title: 'Confirm Deletion',
      content:
        '<div style="margin: 10px 5px 20px 5px">Are you sure you want to delete the <b>' +
        identity.attr('identityName') +
        '</b> Identity? It will be permanently removed from the character sheet.</div>',
      buttons: {
        yes: {
          icon: '<i class="fas fa-check"></i>',
          label: 'Yes',
          callback: () => (applyChanges = true),
        },
        no: {
          icon: '<i class="fas fa-times"></i>',
          label: 'No',
        },
      },
      default: 'yes',
      close: (x) => {
        if (applyChanges) {
          this.actor.deleteEmbeddedDocuments('Item', [itemId]);
        }
      },
    }).render(true);
  }

  async _editIdentity(element) {
    let itemId = $(element).attr('itemid');
    const item = this.actor.items.get(itemId);
    item.sheet.render(true);
  }

  async _listenAddIdentity(event, html) {
    event.preventDefault();
    const item = await Item.create({ name: 'That Thing You Do', type: 'identity' }, { parent: this.actor });
    item.sheet.render(true);
  }

  _listenStressGauges(event) {
    event.preventDefault();
    let notch = $(event.currentTarget);
    let rank = notch.attr('value');
    let outcome = notch.hasClass('hardened') ? 'hardened' : 'failed';
    let gauge = notch.closest('fieldset[gauge]').attr('gauge');
    let actor = this.actor;
    let actorData = actor.system;

    rank = this._toggleStressBoxes(notch, outcome, rank);

    let meter = actorData.gauge[gauge];
    meter[outcome] = rank;
    let update = {};
    update['system.gauge.' + gauge + '.' + outcome] = rank;
    actor.update(update);

    if (outcome == 'failed') {
      return;
    }

    update = {};
    let up = actorData.ability[meter.upbeat];
    up.value = 65 - rank * 5;
    let down = actorData.ability[meter.downbeat];
    down.value = 15 + rank * 5;

    update['system.ability.' + meter.upbeat + '.value'] = up.value;
    update['system.ability.' + meter.downbeat + '.value'] = down.value;
    actor.update(update);
  }

  _toggleStressBoxes(notch, outcome, rank) {
    if (notch.hasClass('stressUnchecked')) {
      notch.removeClass('stressUnchecked').addClass('stressChecked');
      notch
        .prevAll('.' + outcome)
        .removeClass('stressUnchecked')
        .addClass('stressChecked');
    } else if (notch.hasClass('stressChecked')) {
      if (notch.next('.' + outcome).hasClass('stressChecked')) {
        notch
          .nextAll('.' + outcome)
          .removeClass('stressChecked')
          .addClass('stressUnchecked');
      } else {
        notch.removeClass('stressChecked').addClass('stressUnchecked');
        rank = rank - 1;
      }
    }
    return rank;
  }

  _setStressGauge(html, gauge, hardened, failed) {
    let frame = $(html.find('fieldset[gauge = ' + gauge + ']'));

    frame.find('div.hardened').each(function () {
      let notch = $(this);
      if (notch.attr('value') <= hardened) {
        notch.removeClass('stressUnchecked').addClass('stressChecked');
      } else {
        notch.removeClass('stressChecked').addClass('stressUnchecked');
      }
    });

    frame.find('div.failed').each(function () {
      let notch = $(this);
      if (notch.attr('value') <= failed) {
        notch.removeClass('stressUnchecked').addClass('stressChecked');
      } else {
        notch.removeClass('stressChecked').addClass('stressUnchecked');
      }
    });
  }
}

class ua3ItemSheet extends ItemSheet {
  /** @override */
  static get defaultOptions() {
    let sheet = foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['ua3', 'sheet', 'item'],
      width: 550,
      height: 520,
      resizable: false,
    });
    return sheet;
  }

  /** @override */
  get template() {
    const path = 'systems/ua3/templates/item';

    // return a unique item sheet by type, like `weapon-sheet.html or hbs
    return `${path}/${this.item.type}-sheet.hbs`;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
      config: CONFIG.UA3,
    });
    //console.log(context);

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find('.sheet-body');
    const bodyHeight = position.height - 192;
    sheetBody.css('height', bodyHeight);
    return position;
  }

  /** @override */
  /*
  activateEditor(name, options = {}, initialContent = '') {
    console.log('**** In activateEditor ******');
    options.content_css = 'systems/ua3/styles/tinymce.css';
    super.activateEditor(name, options, initialContent);
  }
  */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    //html.find('.identityType').change(this._listenIdentityTypeChange.bind(this));
  }

  _listenIdentityTypeChange(event) {
    event.preventDefault();
    //let config = CONFIG.UA3;
    //let selectType = $(event.currentTarget);
    //let type = config.identityTypes[selectType.val()];
  }

  _setPostUpdateRender(app, html, data) {
    let name = data.item.name.toLowerCase();
    if (name.length != 0) {
      let aoran = 'a';
      switch (name.charAt(0)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          aoran = 'an';
          break;
      }
      $(html.find('.aoran')).text(aoran);
    }
  }
}

class ua3ArchetypeSheet extends ItemSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['ua3', 'sheet', 'item'],
      width: 800,
      height: 600,
      resizable: false,
      tabs: [{ navSelector: '.tabbed', contentSelector: '.tab-content', initial: 'archetype' }],
    });
  }

  /** @override */
  get template() {
    const path = 'systems/ua3/templates/item';

    // return a unique item sheet by type, like `weapon-sheet.html or hbs
    return `${path}/${this.item.type}-sheet.hbs`;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
      config: CONFIG.UA3,
    });

    let channelCount = 0;
    let channels = this.item.system.channels;
    Object.keys(channels).forEach((key) => {
      if (channels[key].blurb != '' && channels[key].description != '') {
        channelCount++;
      }
    });
    context.system.canAddChannel = channelCount != 4;
    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find('.sheet-body');
    const bodyHeight = position.height - 192;
    sheetBody.css('height', bodyHeight);
    return position;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    html.find('.addChannel,.editChannel').click(this._listenUpsertChannel.bind(this));
    html.find('.deleteChannel').click(this._listenDeleteChannel.bind(this));
  }

  async _listenDeleteChannel(event) {
    event.preventDefault();
    const channel = 'system.channels.' + $(event.currentTarget).data('id') + '.';

    let update = {};
    update[channel + 'blurb'] = '';
    update[channel + 'description'] = '';
    update[channel + 'chattext'] = '';
    update[channel + 'avatarcheck'] = false;
    this.item.update(update);
  }

  async _listenUpsertChannel(event) {
    event.preventDefault();
    const target = $(event.currentTarget);
    const action = target.data('type');
    let channelKey = target.data('id');

    let levels = {};
    var channels = this.item.system.channels;
    var channelNo = 0;
    Object.keys(channels).forEach((key) => {
      channelNo++;
      switch (action) {
        case 'add':
          if (channels[key].blurb == '' || channels[key].description == '') {
            levels[key] = channelNo;
          }
          break;
        case 'edit':
          if (key == channelKey) {
            levels[key] = channelNo;
          }
          break;
      }
    });

    const CHANNEL_TEMPLATE = 'systems/ua3/templates/item/channel-sheet.hbs';
    let data = {
      blurb: action == 'edit' ? channels[channelKey].blurb : '',
      levels: levels,
      description: action == 'edit' ? channels[channelKey].description : '',
      chattext: action == 'edit' ? channels[channelKey].chattext : '',
      avatarcheck: action == 'edit' ? channels[channelKey].avatarcheck : false,
    };

    // create the Dialog and await response
    const content = await renderTemplate(CHANNEL_TEMPLATE, data);
    // Create the Dialog window and await submission of the form

    new Promise((resolve) => {
      new Dialog(
        {
          title: 'Channel Definition',
          content,
          buttons: {
            ok: {
              label: 'Ok',
              callback: (html) => resolve(this._updateChannel(html[0].querySelector('form'))),
            },
          },
          default: 'ok',
          close: () => resolve(null),
        },
        {
          width: 500,
          //height: 600,
        },
      ).render(true);
    });
    //console.log(this.item);
  }

  async _updateChannel(form) {
    let blurb = form.blurb.value.trim();
    let descr = form.description.value.trim();
    if (blurb + descr == '') {
      return;
    }

    const channel = 'system.channels.' + form.minimum.value + '.';
    let update = {};
    update[channel + 'blurb'] = blurb;
    update[channel + 'description'] = descr;
    update[channel + 'chattext'] = form.chattext.value.trim();
    update[channel + 'avatarcheck'] = form.avatarcheck.value == 1;
    this.item.update(update);
    return this;
  }
}

class ua3SchoolSheet extends ItemSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['ua3', 'sheet', 'item'],
      width: 1000,
      height: 800,
      resizable: false,
      tabs: [{ navSelector: '.tabbed', contentSelector: '.tab-content', initial: 'school' }],
    });
  }

  /** @override */
  get template() {
    const path = 'systems/ua3/templates/item';

    // return a unique item sheet by type, like `weapon-sheet.html or hbs
    return `${path}/${this.item.type}-sheet.hbs`;
  }

  /** @override */
  async getData(options) {
    const context = super.getData(options);
    foundry.utils.mergeObject(context, {
      system: this.item.system,
      config: CONFIG.UA3,
    });

    return context;
  }

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find('.sheet-body');
    const bodyHeight = position.height - 192;
    sheetBody.css('height', bodyHeight);
    return position;
  }

  /** @override */
  /*
  activateEditor(name, options = {}, initialContent = '') {
    console.log('**** In activateEditor ******');
    options.content_css = 'systems/ua3/styles/tinymce.css';
    super.activateEditor(name, options, initialContent);
  }
  */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    html.find('.spell').click(this._listenShowSpell.bind(this));
    html.find('.addSpell').click(this._listenAddSpell.bind(this));
    html.find('.editSpell').click(this._listenEditSpell.bind(this));
  }

  async _listenShowSpell(event) {
    event.preventDefault();
    let spell = $(event.currentTarget);
    let spelllist = spell.parents('.spelllist:first');
    spelllist.find('span.spell').removeClass('highlightItem');
    spell.addClass('highlightItem');

    console.log(spell);

    let id = spell.data('spell');

    spelllist.parent().find('div.spellDescr').hide();
    spelllist
      .parent()
      .find('div.spellDescr[data-spell="' + id + '"]')
      .show();
  }

  async _listenEditSpell(event) {
    event.preventDefault();
    let id = $(event.currentTarget).data('spell');
    let spell = this.item.system.spells[id];
    let data = {
      id: id,
      name: spell.name,
      charges: spell.charges,
      chargeextra: spell.chargeextra,
      chargetype: spell.chargetype,
      synopsis: spell.synopsis ?? '',
      description: spell.description,
    };
    this._spellDialog(data);
  }

  async _listenAddSpell(event) {
    event.preventDefault();
    let data = {
      id: randomID(),
      name: '',
      charges: 1,
      chargeextra: false,
      chargetype: 'minor',
      synopsis: '',
      description: '',
    };
    this._spellDialog(data);
  }

  async _spellDialog(data) {
    const SPELL_TEMPLATE = 'systems/ua3/templates/item/spell-sheet.hbs';
    const content = await renderTemplate(SPELL_TEMPLATE, data);

    new Promise((resolve) => {
      new Dialog(
        {
          title: this.name + ' Spell',
          content,
          buttons: {
            save: {
              label: 'Save',
              callback: (html) => resolve(this._updateSpell(html[0].querySelector('form'), 'save')),
            },
            delete: {
              label: 'Delete',
              callback: (html) => resolve(this._updateSpell(html[0].querySelector('form'), 'delete')),
            },
          },
          close: () => resolve(null),
        },
        {
          width: 600,
          //height: 500,
        },
      ).render(true);
    });
    //console.log(this.item);
  }

  async _updateSpell(form, action) {
    let update = {};
    let spell = '';

    let id = form.id.value;
    let name = form.name.value.trim();
    if (id == '') {
      return;
    }

    switch (action) {
      case 'delete':
        spell = 'system.spells.-=' + id;
        update[spell] = null;
        break;

      case 'save':
        var synopsis = form.synopsis.value.trim();
        var descr = form.description.value.trim();
        if (name == '' || synopsis == '' || descr == '') {
          return;
        }

        spell = 'system.spells.' + id + '.';
        update[spell + 'name'] = name;
        update[spell + 'charges'] = form.charges.value;
        update[spell + 'chargeextra'] = form.chargeextra.checked;
        update[spell + 'chargetype'] = form.chargetype.value;
        update[spell + 'synopsis'] = synopsis;
        update[spell + 'description'] = descr;
        break;
    }

    if (update != {}) {
      //console.log(update);
      this.item.update(update);
    }
    return this;
  }
}

function registerHelpers() {
  Handlebars.registerHelper('ifequal', function (a, b, options) {
    if (a == b) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper('ifnotequal', function (a, b, options) {
    if (a != b) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper('fixrange', function (num) {
    if (!Number.isNumeric(num)) {
      return num;
    }
    num = Number(num);
    if (num > 99) {
      num = 99;
    } else if (num < 0) {
      num = 0;
    }
    return num;
  });

  Handlebars.registerHelper('breaklines', function (text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<span style="line-height: 0.5em"><br/></span>');
    return new Handlebars.SafeString(text);
  });
}

/**
 * This is your JavaScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your system, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your system.
 */

// Initialize system
Hooks.once('init', async () => {
  console.log(`UA3 | Initializing UA3e System\n${UA3.ASCII}`);

  // Create a namespace within the game global
  game.ua3 = {
    applications: {
      /*
      AbilityUseDialog,
      ActorSheetFlags,
      ActorSheet5eCharacter,
      ActorSheet5eNPC,
      ActorSheet5eVehicle,
      */
      ua3ActorSheet,
      ua3ItemSheet,
      ua3ArchetypeSheet,
      ua3SchoolSheet,
    },
    canvas: {
      //AbilityTemplate
    },
    config: UA3,
    dice: dice,
    entities: {
      ua3Actor,
      ua3Item,
      //TokenDocument5e,
      //Token5e,
    },
    //macros: macros,
    //migrations: migrations,
    //rollItemMacro: macros.rollItemMacro
  };

  // Assign custom classes and constants here
  CONFIG.UA3 = UA3;
  CONFIG.Actor.documentClass = ua3Actor;
  CONFIG.Item.documentClass = ua3Item;
  CONFIG.Combat.documentClass = ua3Combat;
  CONFIG.Combatant.documentClass = ua3Combatant;
  CONFIG.ui.combat = ua3CombatTracker;

  //CONFIG.Token.documentClass = TokenDocument5e;
  //CONFIG.Token.objectClass = Token5e;
  CONFIG.time.roundTime = 6;

  CONFIG.Dice.DUARoll = DUARoll;

  // Patch Core Functions
  CONFIG.Combat.initiative.formula = '1d0 + @system.initiative.value';
  //Combatant.prototype._getInitiativeFormula = _getInitiativeFormula;

  // Register Roll Extensions
  CONFIG.Dice.rolls.push(DUARoll);

  // Handlebars
  registerHelpers();
  await preloadTemplates();

  // Register custom sheets
  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('ua3', ua3ActorSheet, {
    makeDefault: true,
  });

  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('ua3', ua3ItemSheet, {
    makeDefault: true,
  });
  Items.registerSheet('ua3', ua3ArchetypeSheet, {
    types: ['archetype'],
    makeDefault: true,
  });
  Items.registerSheet('ua3', ua3SchoolSheet, {
    types: ['school'],
    makeDefault: true,
  });
});

// Setup system
Hooks.once('setup', async () => {
  // Do anything after initialization but before ready
});

// When ready
Hooks.once('ready', async () => {
  // Do anything once the system is ready
});

// Add any additional hooks if necessary
Hooks.on('renderua3ActorSheet', (app, html, data) => {
  if (data.actor.type == 'character') {
    let gauges = data.actor.system.gauge || {};
    for (var key in gauges) {
      let gauge = gauges[key];
      app._setStressGauge(html, key, gauge.hardened, gauge.failed);
    }
  }
});

Hooks.on('renderua3ItemSheet', (app, html, data) => {
  app._setPostUpdateRender(app, html, data);
});

Hooks.on('renderChatMessage', (msg, html, data) => {
  if (msg.flags.ua3?.type === 'DUARoll') {
    DUARoll.formatChat(msg, html);
  }
});

Hooks.on('applyActiveEffect', (actor, change) => {
  actor.applyCustomEffect(change);
});

/*
function ua3CustomEffect(actor, change) {
  console.log(actor);
  console.log(change);
  // actor is the actor being processed and change a key/value pair
  //if (change.key !=== "data.attributes.ac.value") return;
  // If your active effect spec was 
  // data.actor.attributes.ac.value (change.key) CUSTOM value (the value is not relevant here, but it gets passed as change.value)
  //const actorData = actor.data.data;
  //actorData.attributes.ac.value += Math.ceil((actorData.abilities.str.mod + actorData.abilities.dex.mod) / 2);
  // Although you can change fields other than the change.key field you should not as the core Active Effects tracks all changes made.
}
*/

/*
String.prototype.capitalize = function () {
  return 'A';
  //return this.charAt(0).toUpperCase() + this.slice(1);
};
*/
//# sourceMappingURL=ua3.js.map
