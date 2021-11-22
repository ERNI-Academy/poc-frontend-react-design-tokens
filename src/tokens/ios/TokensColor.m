
//
// TokensColor.m
//
// Do not edit directly
// Generated on Mon, 22 Nov 2021 21:38:17 GMT
//

#import "TokensColor.h"


@implementation TokensColor

+ (UIColor *)color:(TokensColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:1.000f green:0.663f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.898f green:0.212f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.063f green:0.612f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.949f blue:0.949f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.341f green:0.255f blue:0.569f alpha:1.000f],
[UIColor colorWithRed:0.451f green:0.337f blue:0.749f alpha:1.000f],
[UIColor colorWithRed:0.584f green:0.498f blue:0.808f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end