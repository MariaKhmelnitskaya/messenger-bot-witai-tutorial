'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAC5qAYLPFABAIgi9YNK3ml0i4V8T0OYZCnFa56JzE8sZCcktCnc6ZBQtyaoaZBGb45idg7Wes6K4GQWxoOZAtOVp2Wafmp5js2uI547yuIukdufsI0gQ9QJmURHVvRZAn4grR5cZCtV2AU7vaZCKNxKZBTvOeKluUBXR9xOD6ZCqiBwZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'Hello_World'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}