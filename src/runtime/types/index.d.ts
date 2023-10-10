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
