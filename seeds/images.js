exports.seed = function (knex, Promise) {
  return knex('images').del()
    .then(function () {
      return knex('images').insert([
        {id: 1, description: 'Grinning Face', url: 'http://emojipedia-us.s3.amazonaws.com/cache/71/89/7189d9a20f4c87f3a3240e321837e4b8.png'},
        {id: 2, description: 'Face With Tears of Joy', url: 'http://emojipedia-us.s3.amazonaws.com/cache/70/63/70639a57bb3b30a8468cb0c571826db9.png'},
        {id: 3, description: 'Winking Face', url: 'http://emojipedia-us.s3.amazonaws.com/cache/6d/d0/6dd0b7da93480fff19c3710bcb5d73b8.png'},
        {id: 4, description: 'Thinking Face', url: 'http://emojipedia-us.s3.amazonaws.com/cache/b2/ac/b2ac57907db3f5036cb7e9c760a17db0.png'},
        {id: 5, description: 'Alien Monster', url: 'http://emojipedia-us.s3.amazonaws.com/cache/21/50/2150584c25de7e606063f315d7011c01.png'},
        {id: 6, description: 'Pile of Poo', url: 'http://emojipedia-us.s3.amazonaws.com/cache/b1/81/b181f161804d24f58f8b19a2842abaa2.png'},
        {id: 7, description: 'Smiling Cat Face With Open Mouth', url: 'http://emojipedia-us.s3.amazonaws.com/cache/10/ee/10ee9d9136164b6bb4a5bbfd53ba9655.png'},
        {id: 8, description: 'Crying Cat Face', url: 'http://emojipedia-us.s3.amazonaws.com/cache/51/6d/516de24131c3d95e2d5d78adba968ca1.png'},
        {id: 9, description: 'Pouting Cat Face', url: 'http://emojipedia-us.s3.amazonaws.com/cache/28/38/28389269637b6db367f72fac03decc5e.png'},
        {id: 10, description: 'Robot Face', url: 'http://emojipedia-us.s3.amazonaws.com/cache/d1/ec/d1ec3fe0e95c0cc61f11bd4a92a8ee85.png'},
        {id: 11, description: 'See-no-evil Monkey', url: 'http://emojipedia-us.s3.amazonaws.com/cache/c9/d0/c9d0259a2f1f3ab7f5143f3c15a74edf.png'},
        {id: 12, description: 'Hear-no-evil Monkey', url: 'http://emojipedia-us.s3.amazonaws.com/cache/ce/cd/cecde74b1366f476440e6f270b7510b3.png'},
        {id: 13, description: 'Speak-no-evil Monkey', url: 'http://emojipedia-us.s3.amazonaws.com/cache/01/18/0118902d470741fae543768279aa4ba8.png'},
        {id: 14, description: 'Baby', url: 'http://emojipedia-us.s3.amazonaws.com/cache/55/09/55093db0dc1439b58e209e442c5dd800.png'},
        {id: 15, description: 'Ghost', url: 'http://emojipedia-us.s3.amazonaws.com/cache/f9/7a/f97ac7085fb306411db18cc6311bb896.png'},
        {id: 16, description: 'Skull and Crossbones', url: 'http://emojipedia-us.s3.amazonaws.com/cache/9d/6d/9d6d700bc25ad870f86fd081d7520cd3.png'},
        {id: 17, description: 'Smiling Face With Horns', url: 'http://emojipedia-us.s3.amazonaws.com/cache/dd/60/dd60607ad67eb05ab6bf0476df20709b.png'},
        {id: 18, description: 'Nerd Face', url: 'http://emojipedia-us.s3.amazonaws.com/cache/f8/48/f84855c3ac791eb3f06b6437dee646ae.png'},
        {id: 19, description: 'Clown Face', url: 'http://emojipedia-us.s3.amazonaws.com/cache/f1/d0/f1d0d3c3658dc3a3271f8e185bf22352.png'},
        {id: 20, description: 'Smiling Face With Halo', url: 'http://emojipedia-us.s3.amazonaws.com/cache/e3/e0/e3e03d5a3092be979f60f558c1d84f09.png'}
      ])
    })
}
