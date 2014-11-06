import DS from 'ember-data';

export default DS.Model.extend({
	parameter: DS.attr('string'),
	description: DS.attr('string'),
	parameter_type: DS.attr('string'),
	override: DS.attr('boolean'),
	default_value: DS.attr('string'),
	use_puppet_default: DS.attr('string'),
	required: DS.attr('boolean'),
	validator_type: DS.attr('string'),
	validator_rule: DS.attr('string'),

	merge_overrides: DS.attr('boolean'),
	avoid_duplicates: DS.attr('boolean'),
	override_value_order: DS.attr('string'),

	puppetclass: DS.belongsTo('puppetclass'),
	created_at: DS.attr('date'),
	updated_at: DS.attr('date'),
});
