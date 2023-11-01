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
