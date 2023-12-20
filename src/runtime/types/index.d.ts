interface DrawerItem {
  icon: string
  title?: string
  to?: string
  href?: string
  target?: string
  onClick?: () => void
}

type Divider = "---"

type DrawerItemOrDivider = DrawerItem | Divider

interface ReleaseNote {
  /**
   * リリース日
   */
  date: string;
  /**
   * 機能バージョン
   */
  funcVersion: string;
  /**
   * データバージョン
   */
  dataVersion: string;
  /**
   * 更新内容
   */
  content: string;
  /**
   * メジャーバージョンアップかどうか
   */
  isMajor: boolean;
}

interface FilterOption {
  key: string
  titleI18nKey: string
  items: {
    icon: string
    invertIconColor?: boolean
    textI18nKey: string
    value: string
  }[]
}

type PossessionStatus = "owned" | "notOwned"

interface ShowcaseCharacter {
  nameJP: string
  variant: string
  level: number
  rank: number
  promotion: number
  equipment: {
    nameJP: string
    level: number
    promotion: number
  } | null
  skills: {
    type: string
    iconUrl: string
    originalLevel: number
    extraLevel: number
  }[]
}

interface UserInfoResponse {
  uid: string
  nickname: string
  level: number
  characters: ShowcaseCharacter[]
}

interface DataSyncMapGetters {
  getCharacterId: (characterName: string) => string
  getCharacterImage: (characterId: string) => string
  getEquipmentId: (equipmentName: string) => string
  getEquipmentImage: (equipmentId: string) => string
}
