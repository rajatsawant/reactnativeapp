# Styling in ReactNative

## Flex

### All available space
```sh
<View style = {{flex:1, backgroundColor: 'Red'}}><View>
```
### Evenly distributed
```sh
<View style = {{flex:1, backgroundColor: 'Red'}}><View>
<View style = {{flex:1, backgroundColor: 'yellow'}}><View>
<View style = {{flex:1, backgroundColor: 'green'}}><View>
```
### Ratio wise distributed
```sh
<View style = {{flex:1, backgroundColor: 'Red'}}><View>   <!-- smallest -->
<View style = {{flex:2, backgroundColor: 'yellow'}}><View>   <!-- medium -->
<View style = {{flex:3, backgroundColor: 'green'}}><View>   <!-- largest -->
```