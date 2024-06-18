/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type PressCoverage = {
  _id: string;
  _type: "pressCoverage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  date?: string;
  targetType?: "pdf" | "link";
  link?: string;
  pdf?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  pdf_ar?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  publication?: string;
  content?: ContentEditor;
  content_ar?: ContentEditor;
  slug?: Slug;
};

export type PressRelease = {
  _id: string;
  _type: "pressRelease";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  date?: string;
  targetType?: "pdf" | "link";
  link?: string;
  pdf?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  pdf_ar?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  content?: ContentEditor;
  content_ar?: ContentEditor;
  slug?: Slug;
};

export type Press = {
  _id: string;
  _type: "press";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  media?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  } | {
    url?: string;
    caption?: string;
    caption_ar?: string;
    _type: "video";
    _key: string;
  }>;
  content?: ContentEditor;
  content_ar?: ContentEditor;
  pressKitLink?: string;
  slug?: Slug;
};

export type FieldNote = {
  _id: string;
  _type: "fieldNote";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  author?: string;
  author_ar?: string;
  participants?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "participant";
  }>;
  content?: ContentEditor;
  content_ar?: ContentEditor;
  pullQuote?: string;
  pullQuote_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  media?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  } | {
    url?: string;
    caption?: string;
    caption_ar?: string;
    _type: "video";
    _key: string;
  }>;
  links?: Array<{
    title?: string;
    title_ar?: string;
    url?: string;
    _key: string;
  }>;
  credits?: ContentEditor;
  credits_ar?: ContentEditor;
  slug?: Slug;
};

export type Venue = {
  _id: string;
  _type: "venue";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  displayOrder?: number;
  openingHours?: string;
  address?: string;
  address_ar?: string;
  matterportLink?: string;
  location?: Geopoint;
  description?: ContentEditor;
  description_ar?: ContentEditor;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  } | {
    url?: string;
    caption?: string;
    caption_ar?: string;
    _type: "video";
    _key: string;
  }>;
  links?: Array<{
    title?: string;
    title_ar?: string;
    url?: string;
    _key: string;
  }>;
  slug?: Slug;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Event = {
  _id: string;
  _type: "event";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  category?: "discussion" | "performance";
  participants?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "participant";
  }>;
  description?: ContentEditor;
  description_ar?: ContentEditor;
  dateTime?: string;
  period?: "openingEvent" | "closingEvent";
  venues?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "venue";
  }>;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  media?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  } | {
    url?: string;
    caption?: string;
    caption_ar?: string;
    _type: "video";
    _key: string;
  }>;
  credits?: ContentEditor;
  credits_ar?: ContentEditor;
  slug?: Slug;
};

export type Project = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  exhibitionStrand?: "renewed-contextual" | "extraction-politics" | "intangible-bodies";
  description?: ContentEditor;
  description_ar?: ContentEditor;
  pullQuote?: string;
  pullQuote_ar?: string;
  participants?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "participant";
  }>;
  venues?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "venue";
  }>;
  matterportLink?: string;
  year?: string;
  medium?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  processMedia?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  } | {
    url?: string;
    caption?: string;
    caption_ar?: string;
    _type: "video";
    _key: string;
  }>;
  documentationMedia?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    caption?: string;
    caption_ar?: string;
    _type: "video";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    caption?: string;
    caption_ar?: string;
    _type: "audio";
    _key: string;
  }>;
  events?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "event";
  }>;
  credits?: ContentEditor;
  credits_ar?: ContentEditor;
  slug?: Slug;
};

export type Participant = {
  _id: string;
  _type: "participant";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  description?: ContentEditor;
  description_ar?: ContentEditor;
  pullQuote?: string;
  pullQuote_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  } | {
    url?: string;
    caption?: string;
    caption_ar?: string;
    _type: "video";
    _key: string;
  }>;
  links?: Array<{
    title?: string;
    title_ar?: string;
    url?: string;
    _key: string;
  }>;
  slug?: Slug;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  media?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  } | {
    url?: string;
    caption?: string;
    caption_ar?: string;
    _type: "video";
    _key: string;
  }>;
  content?: ContentEditor;
  content_ar?: ContentEditor;
  slug?: Slug;
};

export type StoreItem = {
  _id: string;
  _type: "storeItem";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  } | {
    url?: string;
    caption?: string;
    caption_ar?: string;
    _type: "video";
    _key: string;
  }>;
  link?: string;
  price?: number;
  content?: ContentEditor;
  content_ar?: ContentEditor;
  slug?: Slug;
};

export type DesignStore = {
  _id: string;
  _type: "designStore";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  media?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  } | {
    url?: string;
    caption?: string;
    caption_ar?: string;
    _type: "video";
    _key: string;
  }>;
  content?: ContentEditor;
  content_ar?: ContentEditor;
  slug?: Slug;
};

export type Contact = {
  _id: string;
  _type: "contact";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  media?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  }>;
  content?: ContentEditor;
  content_ar?: ContentEditor;
  slug?: Slug;
};

export type Team = {
  _id: string;
  _type: "team";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  media?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  }>;
  content?: ContentEditor;
  content_ar?: ContentEditor;
  slug?: Slug;
};

export type Theme = {
  _id: string;
  _type: "theme";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  title_ar?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
  };
  media?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    caption_ar?: string;
    _type: "image";
    _key: string;
  }>;
  content?: ContentEditor;
  content_ar?: ContentEditor;
  slug?: Slug;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type ContentEditor = {
  _type: "contentEditor";
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "large" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      platform?: "none" | "twitter" | "instagram" | "facebook";
      href?: string;
      _type: "link";
      _key: string;
    } | {
      file?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
        };
        _type: "file";
      };
      _type: "pdf";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type LandingPage = {
  _id: string;
  _type: "landingPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  topPost?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "project";
  }>;
  timestamp?: number;
  randomSelection?: Array<string>;
};
export declare const internalGroqTypeReferenceTo: unique symbol;
