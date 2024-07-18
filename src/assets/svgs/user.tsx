import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const User = (props: SvgProps) => (
  <Svg width="40" height="40" viewBox="0 0 24 24" {...props}>
    <Path
      fill-rule="evenodd"
      d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
      clip-rule="evenodd"
    />
  </Svg>
)

export default User
