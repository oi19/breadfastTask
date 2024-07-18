import React from "react"
import { ViewStyle } from "react-native"
import { FlashList, FlashListProps } from "@shopify/flash-list"

interface ListProps<T> {
  data: T[]
  renderItem: ({ item }: { item: T }) => React.JSX.Element
  ItemSeparatorComponent?: () => React.JSX.Element
  loading?: boolean
  onRefresh?: () => void
  contentContainerStyle?: ViewStyle
  keyExtractor?: (item: T, index: number) => string
  ListEmptyComponent?: React.ComponentType | React.ReactElement | null
  props?: FlashListProps<T>
}

const List = <T,>({
  data,
  renderItem,
  ItemSeparatorComponent,
  loading,
  onRefresh,
  contentContainerStyle,
  keyExtractor,
  ListEmptyComponent,
  props,
}: ListProps<T>) => {
  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={ListEmptyComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      refreshing={loading}
      onRefresh={onRefresh}
      contentContainerStyle={contentContainerStyle}
      estimatedItemSize={100}
      {...props}
    />
  )
}

export default List
