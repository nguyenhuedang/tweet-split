var _=require("lodash"),tasks;module.exports=[{name:"each",args:[[10],[300],[10000]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.each(tasks,function(d,e){b.setImmediate(e)},c)}},{name:"eachSeries",args:[[10],[300],[10000]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.eachSeries(tasks,function(d,e){b.setImmediate(e)},c)}},{name:"eachLimit",args:[[10],[300],[10000]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.eachLimit(tasks,4,function(d,e){b.setImmediate(e)},c)}},{name:"map",args:[[10],[300],[10000]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.map(tasks,function(d,e){b.setImmediate(e)},c)}},{name:"mapSeries",args:[[10],[300],[10000]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.mapSeries(tasks,function(d,e){b.setImmediate(e)},c)}},{name:"mapLimit",args:[[10],[300],[10000]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.mapLimit(tasks,4,function(d,e){b.setImmediate(e)},c)}},{name:"eachOf",args:[[10],[300],[10000]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.eachOf(tasks,function(d,e,f){b.setImmediate(f)},c)}},{name:"eachOfSeries",args:[[10],[300],[10000]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.eachOfSeries(tasks,function(d,e,f){b.setImmediate(f)},c)}},{name:"eachOfLimit",args:[[10],[300],[10000]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.eachOfLimit(tasks,4,function(d,e,f){b.setImmediate(f)},c)}},{name:"parallel",args:[[10],[100],[1000]],setup:function(b){tasks=_.range(b).map(function(){return function(c){setImmediate(c)}})},fn:function(b,c){b.parallel(tasks,c)}},{name:"series",args:[[10],[100],[1000]],setup:function(b){tasks=_.range(b).map(function(){return function(c){setImmediate(c)}})},fn:function(b,c){b.series(tasks,c)}},{name:"waterfall",args:[[10],[100],[1000]],setup:function(b){tasks=[function(c){return c(null,1)}].concat(_.range(b).map(function(c){return function(d,e){setImmediate(function(){e(null,c)})}}))},fn:function(b,c){b.waterfall(tasks,c)}},{name:"queue",args:[[1000],[30000],[100000],[200000]],setup:function(b){tasks=b},fn:function(b,c){function d(h,j){return h.num===e?c():void setImmediate(j)}for(var e=tasks,f=b.queue(d,1),g=1;g<=e;g++)f.push({num:g})}},{name:"some - no short circuit- false",args:[[500]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.some(tasks,function(d,e){b.setImmediate(function(){e(600<=d)})},c)}},{name:"some - short circuit - true",args:[[500]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.some(tasks,function(d,e){b.setImmediate(function(){e(60<=d)})},c)}},{name:"every - no short circuit- true",args:[[500]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.every(tasks,function(d,e){b.setImmediate(function(){e(600>=d)})},c)}},{name:"every - short circuit - false",args:[[500]],setup:function(b){tasks=_.range(b)},fn:function(b,c){b.every(tasks,function(d,e){b.setImmediate(function(){e(60>=d)})},c)}},{name:"defer nextTick",fn:function(b,c){process.nextTick(c)}},{name:"defer setImmediate",fn:function(b,c){setImmediate(c)}},{name:"defer async.nextTick",fn:function(b,c){b.nextTick(c)}},{name:"defer async.setImmediate",fn:function(b,c){b.setImmediate(c)}},{name:"defer setTimeout",fn:function(b,c){setTimeout(c,0)}},{name:"ensureAsync sync",fn:function(b,c){b.ensureAsync(function(d){d()})(c)}},{name:"ensureAsync async",fn:function(b,c){b.ensureAsync(function(d){setImmediate(d)})(c)}},{name:"ensureAsync async noWrap",fn:function(b,c){(function(d){setImmediate(d)})(c)}}];