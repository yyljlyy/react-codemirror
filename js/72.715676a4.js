(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"./node_modules/codemirror/mode/puppet/puppet.js":function(e,n,t){!function(e){"use strict";e.defineMode("puppet",function(){var e={},n=/({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;function t(n,t){for(var i=t.split(" "),o=0;o<i.length;o++)e[i[o]]=n}function i(e,n){for(var t,i,o=!1;!e.eol()&&(t=e.next())!=n.pending;){if("$"===t&&"\\"!=i&&'"'==n.pending){o=!0;break}i=t}return o&&e.backUp(1),t==n.pending?n.continueString=!1:n.continueString=!0,"string"}return t("keyword","class define site node include import inherits"),t("keyword","case if else in and elsif default or"),t("atom","false true running present absent file directory undef"),t("builtin","action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool"),{startState:function(){var e={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return e},token:function(t,o){return t.eatSpace()?null:function(t,o){var a=t.match(/[\w]+/,!1),s=t.match(/(\s+)?\w+\s+=>.*/,!1),r=t.match(/(\s+)?[\w:_]+(\s+)?{/,!1),c=t.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/,!1),u=t.next();if("$"===u)return t.match(n)?o.continueString?"variable-2":"variable":"error";if(o.continueString)return t.backUp(1),i(t,o);if(o.inDefinition){if(t.match(/(\s+)?[\w:_]+(\s+)?/))return"def";t.match(/\s+{/),o.inDefinition=!1}return o.inInclude?(t.match(/(\s+)?\S+(\s+)?/),o.inInclude=!1,"def"):t.match(/(\s+)?\w+\(/)?(t.backUp(1),"def"):s?(t.match(/(\s+)?\w+/),"tag"):a&&e.hasOwnProperty(a)?(t.backUp(1),t.match(/[\w]+/),t.match(/\s+\S+\s+{/,!1)&&(o.inDefinition=!0),"include"==a&&(o.inInclude=!0),e[a]):/(^|\s+)[A-Z][\w:_]+/.test(a)?(t.backUp(1),t.match(/(^|\s+)[A-Z][\w:_]+/),"def"):r?(t.match(/(\s+)?[\w:_]+/),"def"):c?(t.match(/(\s+)?[@]{1,2}/),"special"):"#"==u?(t.skipToEnd(),"comment"):"'"==u||'"'==u?(o.pending=u,i(t,o)):"{"==u||"}"==u?"bracket":"/"==u?(t.match(/.*?\//),"variable-3"):u.match(/[0-9]/)?(t.eatWhile(/[0-9]+/),"number"):"="==u?(">"==t.peek()&&t.next(),"operator"):(t.eatWhile(/[\w-]/),null)}(t,o)}}}),e.defineMIME("text/x-puppet","puppet")}(t("./node_modules/codemirror/lib/codemirror.js"))}}]);