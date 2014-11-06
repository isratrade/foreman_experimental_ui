import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace:'api/v2',
  host: 'http://0.0.0.0:3000',
   headers: {
//     Authorization: "Basic " + Crypto.util.bytesToBase64(Crypto.charenc.Binary.stringToBytes('admin' + ":" + 'changeme'))
   }
});
