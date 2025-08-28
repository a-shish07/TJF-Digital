Place your optimized hero video files here:
- hero.webm (VP9/AV1 preferable)
- hero.mp4 (H.264 fallback)
- hero-poster.jpg (lightweight poster image, ~40–120KB)

Optimization tips:
1) Keep duration short (6–12s) and loopable.
2) Target ~720p or 1080p max for background; heavy blur reduces the need for 4K.
3) Bitrate around 1–2.5 Mbps is sufficient for background visuals.
4) Consider muted colors and lower contrast; overlay handles readability.
5) Use tools like ffmpeg to generate both formats and compress poster.

Example ffmpeg commands (run locally):
- webm (vp9): ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 1.8M -crf 32 -an -vf "scale=-2:1080,format=yuv420p" hero.webm
- mp4 (h264): ffmpeg -i input.mp4 -c:v libx264 -preset veryslow -b:v 2M -crf 28 -an -vf "scale=-2:1080,format=yuv420p" hero.mp4
- poster: ffmpeg -i input.mp4 -ss 00:00:01.000 -vframes 1 -vf "scale=-2:1080" hero-poster.jpg