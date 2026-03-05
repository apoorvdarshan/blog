import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconBluesky from "@/assets/icons/IconBluesky.svg";
import IconYoutube from "@/assets/icons/IconYoutube.svg";
import IconInstagram from "@/assets/icons/IconInstagram.svg";
import IconTwitch from "@/assets/icons/IconTwitch.svg";
import IconProductHunt from "@/assets/icons/IconProductHunt.svg";
import IconCredly from "@/assets/icons/IconCredly.svg";
import IconPeerlist from "@/assets/icons/IconPeerlist.svg";
import IconMedium from "@/assets/icons/IconMedium.svg";
import IconHackerNoon from "@/assets/icons/IconHackerNoon.svg";
import IconHashnode from "@/assets/icons/IconHashnode.svg";
import IconDevTo from "@/assets/icons/IconDevTo.svg";
import IconCalDotCom from "@/assets/icons/IconCalendar2.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/apoorvdarshan",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "X",
    href: "https://x.com/apoorvdarshan",
    linkTitle: `${SITE.title} on X`,
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/apoorvdarshan/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/apoorvdarshan.com",
    linkTitle: `${SITE.title} on Bluesky`,
    icon: IconBluesky,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@apoorvdarshan",
    linkTitle: `${SITE.title} on YouTube`,
    icon: IconYoutube,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/apoorvdarshan",
    linkTitle: `${SITE.title} on Instagram`,
    icon: IconInstagram,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/apoorvdarshan",
    linkTitle: `${SITE.title} on Twitch`,
    icon: IconTwitch,
  },
  {
    name: "Product Hunt",
    href: "https://producthunt.com/@apoorvdarshan",
    linkTitle: `${SITE.title} on Product Hunt`,
    icon: IconProductHunt,
  },
  {
    name: "Credly",
    href: "https://credly.com/users/apoorvdarshan",
    linkTitle: `${SITE.title} on Credly`,
    icon: IconCredly,
  },
  {
    name: "Peerlist",
    href: "https://peerlist.io/apoorvdarshan",
    linkTitle: `${SITE.title} on Peerlist`,
    icon: IconPeerlist,
  },
  {
    name: "Medium",
    href: "https://medium.com/@apoorvdarshan",
    linkTitle: `${SITE.title} on Medium`,
    icon: IconMedium,
  },
  {
    name: "HackerNoon",
    href: "https://hackernoon.com/u/apoorvdarshan",
    linkTitle: `${SITE.title} on HackerNoon`,
    icon: IconHackerNoon,
  },
  {
    name: "Hashnode",
    href: "https://hashnode.com/@apoorvdarshan",
    linkTitle: `${SITE.title} on Hashnode`,
    icon: IconHashnode,
  },
  {
    name: "Dev.to",
    href: "https://dev.to/apoorvdarshan",
    linkTitle: `${SITE.title} on Dev.to`,
    icon: IconDevTo,
  },
  {
    name: "Cal.com",
    href: "https://cal.com/apoorvdarshan",
    linkTitle: `Book a call with ${SITE.title}`,
    icon: IconCalDotCom,
  },
  {
    name: "Mail",
    href: "mailto:mail@apoorvdarshan.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: `Share this post on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/intent/compose?text=",
    linkTitle: `Share this post on Bluesky`,
    icon: IconBluesky,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
