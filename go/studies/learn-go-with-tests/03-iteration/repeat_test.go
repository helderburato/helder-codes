package iteration

import (
	"testing"
	"fmt"
)

func TestRepeat(t *testing.T) {
	repeated := Repeat("a", 2)
	expected := "aa"

	if repeated != expected {
		t.Errorf("expected %q but got %q", expected, repeated)
	}
}

func BenchmarkRepeat(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Repeat("a", 2)
	}
}

func ExampleRepeat() {
	repeated := Repeat("a", 10)
	fmt.Println(repeated)
	// Output: aaaaaaaaaa
}
