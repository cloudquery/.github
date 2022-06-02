//go:build ignore
// +build ignore

package gorules

import (
	"github.com/quasilyte/go-ruleguard/dsl"
)

func redundantCast(m dsl.Matcher) {
	m.Match("fmt.Errorf($x, $y)").Where(m["x"].Text.Matches("expected .* but got .*")).Report("Checking for cast errors in resources is redundant")
}
