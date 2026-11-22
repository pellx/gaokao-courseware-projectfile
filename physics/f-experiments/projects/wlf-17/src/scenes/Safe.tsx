import React from 'react';
import {AutoScene} from '../components/auto';

export const Safe: React.FC = () => <AutoScene k="safe" d={{"tag": "考点五", "title": "安全与操作要求", "blocks": [{"t": "items", "items": [{"at": "s1", "text": "低压交流电源，电压不超过 {12 V}"}, {"at": "s2", "text": "通电时{不碰}裸露导线和接线柱"}, {"at": "s3", "text": "先用{最大量程挡}试测，再换适当挡位"}], "size": 34}], "callout": {"label": "要点", "at": "s4", "text": "检查无误后{再通电}"}, "beat": {"k": "cheer", "at": "s3b", "text": "先检查\n再{通电|red}"}}} />;
