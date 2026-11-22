import React from 'react';
import {AutoScene} from '../components/auto';

export const Color: React.FC = () => <AutoScene k="color" d={{"tag": "考点六", "title": "显色反应与灼烧", "blocks": [{"t": "items", "items": [{"at": "co1", "text": "含苯环蛋白质 + 浓硝酸 → {黄色}"}, {"at": "co2", "text": "灼烧：{烧焦羽毛气味}"}, {"at": "co3", "text": "水解最终产物：{氨基酸}"}], "size": 36}], "callout": {"label": "考法", "at": "co4", "text": "真丝与人造丝：{灼烧闻气味}"}, "beat": {"k": "duo", "at": "co3b", "text": "蚕丝还是棉花\n{烧一下闻气味|red}"}}} />;
