import Avatar, { avatar } from "@/components/astro/Avatar/Avatar.astro";
import AvatarFallback, {
  avatarFallback,
} from "@/components/astro/Avatar/AvatarFallback.astro";
import AvatarImage, {
  avatarImage,
} from "@/components/astro/Avatar/AvatarImage.astro";

const AvatarVariants = { avatar, avatarFallback, avatarImage };

export { Avatar, AvatarFallback, AvatarImage, AvatarVariants };

export default {
  Root: Avatar,
  Image: AvatarImage,
  Fallback: AvatarFallback,
};
