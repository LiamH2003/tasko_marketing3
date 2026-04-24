// Icon mapping from emoticons to SVG icons
import userIcon from '../assets/icons/user.svg'
import usersIcon from '../assets/icons/users.svg'
import starIcon from '../assets/icons/star.svg'
import smileyIcon from '../assets/icons/smiley.svg'
import smileyMehIcon from '../assets/icons/smiley-meh.svg'
import smileyBlankIcon from '../assets/icons/smiley-blank.svg'
import smileySadIcon from '../assets/icons/smiley-sad.svg'
import smileyAngryIcon from '../assets/icons/smiley-angry.svg'
import clipboardIcon from '../assets/icons/clipboard-text.svg'
import bookIcon from '../assets/icons/book-open.svg'
import clockIcon from '../assets/icons/clock.svg'
import fireIcon from '../assets/icons/fire.svg'
import chartIcon from '../assets/icons/chart-line-up.svg'
import gameIcon from '../assets/icons/game-controller.svg'
import targetIcon from '../assets/icons/target.svg'
import heartIcon from '../assets/icons/heart.svg'
import shieldIcon from '../assets/icons/shield-check.svg'
import lockIcon from '../assets/icons/lock.svg'
import fileIcon from '../assets/icons/file-text.svg'
import chatIcon from '../assets/icons/chat-teardrop-dots.svg'
import smileyXIcon from '../assets/icons/smiley-x-eyes.svg'
import mobileSlashIcon from '../assets/icons/device-mobile-slash.svg'
import trophyIcon from '../assets/icons/trophy.svg'
import bellIcon from '../assets/icons/bell.svg'
import bellSlashIcon from '../assets/icons/bell-slash.svg'
import linkIcon from '../assets/icons/link.svg'
import instagramIcon from '../assets/icons/instagram-logo.svg'
import xIcon from '../assets/icons/x-logo.svg'
import gearIcon from '../assets/icons/gear.svg'
import checkIcon from '../assets/icons/check-square.svg'

export const iconMap = {
  // Family / Users
  '👨': userIcon,
  '👩': userIcon,
  '👨‍👩‍👧': usersIcon,
  '👩‍👦': usersIcon,
  '👨‍👧': usersIcon,
  '👧': userIcon,
  '👦': userIcon,

  // Ratings
  '⭐': starIcon,

  // Mood system
  '😄': smileyIcon,
  '�': smileyIcon,
  '🙂': smileyMehIcon,
  '😌': smileyMehIcon,
  '😐': smileyBlankIcon,
  '😔': smileySadIcon,
  '😤': smileyAngryIcon,

  // Tasks / routines
  '📋': clipboardIcon,
  '📚': bookIcon,

  // Time / progress
  '⏱': clockIcon,
  '🔥': fireIcon,

  // Features
  '🎮': gameIcon,
  '🎯': targetIcon,
  '💚': heartIcon,

  // Safety / parents
  '🔒': shieldIcon,
  '🔐': lockIcon,

  // Dashboard / insights
  '📊': fileIcon,
  '📄': fileIcon,
  '💭': chatIcon,

  // Pain points
  '😩': smileyXIcon,
  '📵': mobileSlashIcon,
  '🏆': trophyIcon,

  // Notifications
  '🔔': bellIcon,
  '🔕': bellSlashIcon,

  // Social / links
  '🔗': linkIcon,
  '📷': instagramIcon,
  '𝕏': xIcon,

  // System / setup
  '⚙️': gearIcon,
  '✔': checkIcon,
  '✏️': gearIcon,
  '📸': fileIcon,
}

export function getIconSrc(emoji) {
  return iconMap[emoji] || null
}
