"""Print the X caption prepared for the make-your-own-bounty promo post."""
from pathlib import Path

HERE = Path(__file__).resolve().parent


def read_text(name):
    path = HERE / name
    if not path.exists():
        return ""
    return path.read_text(encoding="utf-8").strip()


caption = read_text("caption.txt")
print("Caption:")
print(caption)
