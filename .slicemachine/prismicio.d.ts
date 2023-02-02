// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for contries documents */
interface ContriesDocumentData {
    /**
     * title field in *contries*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * subtitle field in *contries*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * description field in *contries*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Slide Image field in *contries*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.slide_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    slide_image: prismicT.ImageField<never>;
    /**
     * Banner Image field in *contries*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.banner_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner_image: prismicT.ImageField<never>;
    /**
     * countries field in *contries*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.countries
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    countries: prismicT.NumberField;
    /**
     * languages field in *contries*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.languages
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    languages: prismicT.NumberField;
    /**
     * cities field in *contries*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.cities
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    cities: prismicT.NumberField;
    /**
     * cities100 field in *contries*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.cities100[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    cities100: prismicT.GroupField<Simplify<ContriesDocumentDataCities100Item>>;
}
/**
 * Item in contries → cities100
 *
 */
export interface ContriesDocumentDataCities100Item {
    /**
     * TumbNail field in *contries → cities100*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.cities100[].tumbnail
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    tumbnail: prismicT.ImageField<never>;
    /**
     * Flag field in *contries → cities100*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.cities100[].flag
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    flag: prismicT.ImageField<never>;
    /**
     * city field in *contries → cities100*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.cities100[].city
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    city: prismicT.KeyTextField;
    /**
     * country field in *contries → cities100*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contries.cities100[].country
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    country: prismicT.KeyTextField;
}
/**
 * contries document from Prismic
 *
 * - **API ID**: `contries`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContriesDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ContriesDocumentData>, "contries", Lang>;
export type AllDocumentTypes = ContriesDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ContriesDocumentData, ContriesDocumentDataCities100Item, ContriesDocument, AllDocumentTypes };
    }
}
