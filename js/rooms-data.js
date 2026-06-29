(function () {
  "use strict";

  const R = "assets/images/rooms/";

  const POLU = [
    R + "lyux/AO5A0944.webp",
    R + "lyux/AO5A0946.webp",
    R + "lyux/AO5A0954.webp",
    R + "lyux/AO5A0931.webp",
    R + "lyux/AO5A0961.webp",
  ];

  window.TAL_ROOMS = [
    {
      slug: "odnomestny",
      images: [
        R + "odnomestny/odnomestny-3.webp",
        R + "odnomestny/odnomestny-4.webp",
        R + "odnomestny/odnomestny-1.webp",
        R + "odnomestny/odnomestny-2.webp",
      ],
    },
    {
      slug: "standart",
      images: [
        R + "standart/DSCF0951.webp",
        R + "standart/DSCF0954.webp",
        R + "standart/DSCF0957.webp",
        R + "standart/DSCF0960.webp",
        R + "standart/DSCF0963.webp",
      ],
    },
    {
      slug: "polulyux",
      images: POLU,
    },
    {
      slug: "lyux",
      images: [
        R + "lyux/AO5A0851.webp",
        R + "lyux/AO5A0898.webp",
        R + "lyux/AO5A0929.webp",
        R + "lyux/AO5A0891.webp",
        R + "lyux/AO5A0970.webp",
        R + "lyux/AO5A0975.webp",
      ],
    },
    {
      slug: "semeini",
      images: [
        R + "semeini/AO5A0784.webp",
        R + "semeini/AO5A0786.webp",
        R + "semeini/AO5A0788.webp",
        R + "semeini/AO5A0790.webp",
        R + "semeini/AO5A0797.webp",
        R + "semeini/AO5A0799.webp",
        R + "semeini/AO5A0810.webp",
        R + "semeini/AO5A0813.webp",
        R + "semeini/AO5A0833.webp",
        R + "semeini/AO5A0840.webp",
      ],
    },
    {
      slug: "guest_house",
      images: [
        R + "guest_house/DSC09005.webp",
        R + "guest_house/DSC09009.webp",
        R + "guest_house/DSC09013.webp",
        R + "guest_house/DSC09016.webp",
        R + "guest_house/DSC09027.webp",
        R + "guest_house/guest_house-extra.webp",
      ],
    },
    {
      slug: "celebrity",
      images: [
        R + "celebrity_house/DSC09155.webp",
        R + "celebrity_house/IMG_0569-2.webp",
        R + "celebrity_house/DSC09099-2.webp",
        R + "celebrity_house/DSC09101.webp",
        R + "celebrity_house/celebrity-extra.webp",
      ],
    },
  ];

  window.TAL_ROOMS_BY_SLUG = window.TAL_ROOMS.reduce(function (acc, r) {
    acc[r.slug] = r;
    return acc;
  }, {});
})();
