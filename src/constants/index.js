import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Chefs' },
    { value: '500+', label: 'Menus' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Kunal Kapoor",
        price: "200+ Orders",
    },
    {
        imgURL: shoe5,
        name: "Sanjeev Kapoor",
        price: "500+ Orders",
    },
    {
        imgURL: shoe6,
        name: "Garima Arora",
        price: "100+ Orders ",
    },
    {
        imgURL: shoe7,
        name: "Ajay Chopra",
        price: "350+ Orders",
    },
];

export const services = [
    {
        imgURL: shieldTick,
        label: "Become Member",
        subtext: "As a member you get to choose what you would like to taste and your preference."
    },
    {
        imgURL: support,
        label: "Post Videos",
        subtext: "Post youtube, instagram videos of the recipe that you want to taste"
    },
    {
        imgURL: truckFast,
        label: "Get Notified",
        subtext: "Our dedicated team will confirm when your preference is scheduled."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Chefs", link: "/" },
            { name: "Content Creators", link: "/" },
            { name: "Crypto Owners Fund", link: "/" },
            { name: "Restaurants", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "b.k@rmint.co", link: "mailto:b.k@rmint.co" },
            { name: "+1-317-625-0630", link: "tel:+1-317-625-0630" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", url: "http://www.facebook.com" },
    { src: twitter, alt: "twitter logo", url: "https://twitter.com/rmint_official" },
    { src: instagram, alt: "instagram logo", url: "http://www.instagram.com" },
];