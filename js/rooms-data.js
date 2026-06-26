(function () {
  "use strict";

  const R = "assets/images/rooms/";

  const POLU = [
    R + "lyux/AO5A0944.jpg",
    R + "lyux/AO5A0946.jpg",
    R + "lyux/AO5A0954.jpg",
    R + "lyux/AO5A0931.jpg",
    R + "lyux/AO5A0961.jpg",
  ];

  window.TAL_ROOMS = [
    {
      slug: "odnomestny",
      images: [
        R + "odnomestny/odnomestny-3.png",
        R + "odnomestny/odnomestny-4.png",
        R + "odnomestny/odnomestny-1.png",
        R + "odnomestny/odnomestny-2.png",
      ],
    },
    {
      slug: "standart",
      images: [
        R + "standart/DSCF0951.jpg",
        R + "standart/DSCF0954.jpg",
        R + "standart/DSCF0957.jpg",
        R + "standart/DSCF0960.jpg",
        R + "standart/DSCF0963.jpg",
      ],
    },
    {
      slug: "polulyux",
      images: POLU,
    },
    {
      slug: "lyux",
      images: [
        R + "lyux/AO5A0851.jpg",
        R + "lyux/AO5A0898.jpg",
        R + "lyux/AO5A0929.jpg",
        R + "lyux/AO5A0891.jpg",
        R + "lyux/AO5A0970.jpg",
        R + "lyux/AO5A0975.jpg",
      ],
    },
    {
      slug: "semeini",
      images: [
        R + "semeini/AO5A0784.jpg",
        R + "semeini/AO5A0786.jpg",
        R + "semeini/AO5A0788.jpg",
        R + "semeini/AO5A0790.jpg",
        R + "semeini/AO5A0797.jpg",
        R + "semeini/AO5A0799.jpg",
        R + "semeini/AO5A0810.jpg",
        R + "semeini/AO5A0813.jpg",
        R + "semeini/AO5A0833.jpg",
        R + "semeini/AO5A0840.jpg",
      ],
    },
    {
      slug: "guest_house",
      images: [
        R + "guest_house/DSC09005.jpg",
        R + "guest_house/DSC09009.jpg",
        R + "guest_house/DSC09013.jpg",
        R + "guest_house/DSC09016.jpg",
        R + "guest_house/DSC09027.jpg",
        R + "guest_house/guest_house-extra.png",
      ],
    },
    {
      slug: "celebrity",
      images: [
        R + "celebrity_house/DSC09155.jpg",
        R + "celebrity_house/IMG_0569-2.jpg",
        R + "celebrity_house/DSC09099-2.jpg",
        R + "celebrity_house/DSC09101.jpg",
        R + "celebrity_house/celebrity-extra.png",
      ],
    },
  ];

  window.TAL_ROOMS_BY_SLUG = window.TAL_ROOMS.reduce(function (acc, r) {
    acc[r.slug] = r;
    return acc;
  }, {});
})();
