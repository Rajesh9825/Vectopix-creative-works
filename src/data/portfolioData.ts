export const portfolioStructure = {

  "Graphic Design": {

    "Branding and Identity": {
      filters: ["Logo", "Brand Identity", "Business Card", "Brand Stationery"],
      works: [

       {
          id: "logo1",
          type: "image",
          filter: "Logo",
          src: "https://res.cloudinary.com/dep3ixqlu/image/upload/v173468/Bandi_3_vwwwrx.jpg"
        },

        {
          id: "logo2",
          type: "image",
          filter: "Logo",
          src: "https://drive.google.com/uc?export=view&id=1WcQ8CMqrJB2uXBuvdeSqKSACbWDafShX/view"
        },

        {
          id: "brand1",
          type: "image",
          filter: "Brand Identity",
          src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71"
        },

        {
          id: "card1",
          type: "image",
          filter: "Business Card",
          src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71"
        },

        {
          id: "stationery1",
          type: "image",
          filter: "Brand Stationery",
          src: "https://source.unsplash.com/random/900x700?stationery"
        }

      ]
    },

    "Marketing & Advertising Design": {
      filters: ["Hoarding", "Standee", "Banner", "Ad Poster"],
      works: [

        {
          id: "hoarding1",
          type: "image",
          filter: "Hoarding",
          src: "https://source.unsplash.com/random/900x700?billboard"
        },

        {
          id: "standee1",
          type: "image",
          filter: "Standee",
          src: "https://source.unsplash.com/random/900x700?advertising"
        },

        {
          id: "banner1",
          type: "image",
          filter: "Banner",
          src: "https://source.unsplash.com/random/900x700?marketing"
        }

      ]
    },

    "Packaging & Product Design": {
      filters: ["Label Design", "Packaging", "Box Design"],
      works: [

        {
          id: "pkg1",
          type: "image",
          filter: "Packaging",
          src: "https://source.unsplash.com/random/900x700?packaging"
        },

        {
          id: "pkg2",
          type: "image",
          filter: "Label Design",
          src: "https://source.unsplash.com/random/900x700?product-label"
        },

        {
          id: "pkg3",
          type: "image",
          filter: "Box Design",
          src: "https://source.unsplash.com/random/900x700?box-packaging"
        }

      ]
    },

    "Print Design": {
      filters: ["Brochure", "Flyer", "Menu", "Poster", "Catalog"],
      works: [

        {
          id: "brochure1",
          type: "image",
          filter: "Brochure",
          src: "https://source.unsplash.com/random/900x700?brochure"
        },

        {
          id: "flyer1",
          type: "image",
          filter: "Flyer",
          src: "https://source.unsplash.com/random/900x700?flyer"
        },

        {
          id: "poster1",
          type: "image",
          filter: "Poster",
          src: "https://source.unsplash.com/random/900x700?poster"
        }

      ]
    },

    "Social Media Design": {
      filters: [
        "Instagram Posts",
        "Facebook Creatives",
        "LinkedIn Creatives",
        "YouTube Thumbnails"
      ],

      works: [

        {
          id: "insta1",
          type: "image",
          filter: "Instagram Posts",
          src: "https://source.unsplash.com/random/900x700?instagram"
        },

        {
          id: "facebook1",
          type: "image",
          filter: "Facebook Creatives",
          src: "https://source.unsplash.com/random/900x700?social-media"
        },

        {
          id: "youtube1",
          type: "image",
          filter: "YouTube Thumbnails",
          src: "https://source.unsplash.com/random/900x700?youtube"
        }

      ]
    }

  },

  "Motion Graphics": {

    "Logo Animation": {
      works: [

        {
          id: "motion1",
          type: "video",
          source: "youtube",
          url: "https://player.cloudinary.com/embed/?cloud_name=dep3ixqlu&public_id=Pornima_Ashish_For_Friend_Invitation_jialpu"
        },

        {
          id: "motion2",
          type: "video",
          source: "drive",
          url: "https://drive.google.com/file/d/1mNeOq3cJK5oXrc9IIX4494kJdXMcE1oo/preview?usp=sharing"
        }

      ]
    },

    "Social Media Motion Posts": {
      works: [

        {
          id: "motion3",
          type: "video",
          source: "local",
          url: "/videos/logo-animation.mp4"
        }

      ]
    },

    "Explainer Videos": {
      works: [

        {
          id: "motion4",
          type: "video",
          youtube: "https://www.youtube.com/embed/aqz-KE-bpKQ"
        }

      ]
    },

    "Animated Ads": {
      works: [

        {
          id: "motion5",
          type: "video",
          youtube: "https://www.youtube.com/embed/ysz5S6PUM-U"
        }

      ]
    },

    "Kinetic Typography": { works: [] },

    "GIF Animations": { works: [] }

  },

  "Video Editing": {

    "Promotional Videos": {
      works: [
        {
          id: "video1",
          type: "video",
          youtube: "https://www.youtube.com/embed/ysz5S6PUM-U"
        }
      ]
    },

    "Corporate Videos Editing": {
      works: [
        {
          id: "video2",
          type: "video",
          youtube: "https://www.youtube.com/embed/tgbNymZ7vqY"
        }
      ]
    },

    "Content Editing": {
      works: [
        {
          id: "video3",
          type: "video",
          youtube: "https://www.youtube.com/embed/jNQXAC9IVRw"
        }
      ]
    },

    "Instagram Reels Editing": {
      works: [
        // {
        //   id: "video4",
        //   type: "video",
        //   youtube: "https://www.youtube.com/embed/aqz-KE-bpKQ"
        // }
      ]
    }

  }

};