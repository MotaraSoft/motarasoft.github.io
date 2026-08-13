# Current functions

The public source tree contains:

- **Scenes and models:** local scene persistence, model assignment, image and video backgrounds, effects, screenshots, and Cubism model-directory or archive import.
- **Tracking:** iFacialMocap UDP, local-camera MediaPipe, and local OpenSeeFace process adapters, with mapping, formulas, calibration, filtering, and bounded frame processing.
- **Rendering:** MOC3 parsing and Skia rendering through the separately maintained MIT-licensed [PurismCore](https://github.com/MotaraSoft/PurismCore) component.
- **Output:** a configurable Live2D Cubism Editor external-API adapter.
- **Collaboration:** installation identity storage, invitation formats, encrypted peer frames, local friend records, and model-package transfer primitives.

Some functions require local runtimes, external applications, or model data. See [Availability](/guide/availability/) for the files that are absent from the repository.

![Motara English workspace](/screenshots/motara-overview-en.webp)

[Check availability boundaries](/guide/availability/) · [Read project status](/guide/project-status/)
