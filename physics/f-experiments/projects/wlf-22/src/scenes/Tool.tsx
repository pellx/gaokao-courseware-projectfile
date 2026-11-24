import React from 'react';
import {AutoScene} from '../components/auto';

export const Tool: React.FC = () => <AutoScene k="tool" d={{"tag": "考点三", "title": "器材及作用", "blocks": [{"t": "table", "at": "t1", "head": ["器材", "作用"], "cols": "1fr 1.8fr", "rows": [{"at": "t1", "cells": ["注射器、柱塞", "与橡胶套一起{封闭空气柱}"]}, {"at": "t1", "cells": ["橡胶套", "封住注射器下端的{开口}"]}, {"at": "t2", "cells": ["压力表", "显示气体的{压强 p}"]}, {"at": "t3", "cells": ["注射器刻度", "读空气柱{长度 L}，V = LS"]}], "size": 30, "rowHeight": 66}], "callout": {"label": "要点", "at": "t4", "text": "压强看{压力表}，体积看{刻度}"}, "beat": {"k": "syringe", "at": "t3b", "text": "柱塞 + 橡胶套\n把空气{关在里面|red}"}}} />;
