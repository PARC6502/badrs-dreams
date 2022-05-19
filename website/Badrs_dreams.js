var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"introducing_psych_ward"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"introducing_psych_ward":[["^Badr paced the short, dimly lit hallway. Upon reaching the bookcase at the end of the hall they scanned it for the millionth time. Just like all the other times, the choices were disappointing. They'd already read everything that seemed interesting.","\n","^Still, Badr reached out their tattooed arm, running their fingers along the spines of the books. Finally, near the bottom of the bookcase, their hand stopped at a leather bound book with no title on the spine.","\n","ev","str","^Take the book","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Continue pacing","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"take_book"},"\n",{"#f":5}],"c-1":["^ ",{"->":"more_pacing"},"\n",{"#f":5}]}],{"#f":1}],"take_book":["^Badr pulled out the book, noting the cracks and discouloration of its leather. Looking at the front the book was merely titled \"Tales\", with no mention of the author. Badr figured it might keep them busy when they failed to fall asleep later. Turning around, they continued to pace.","\n",{"->":"more_pacing"},{"#f":1}],"more_pacing":["^Upon making it back to the sitting area Badr bumped into one of the support workers on night shift. Badr wasn't sure whether or not they'd seen her before.","\n","^\"Struggling to sleep?\" she asked, with a kind smile","\n","^\"As always\" Badr said","\n","^\"You know the doctor can write you some medication to help with that?\"","\n","^\"I know\" Badr was already tired of this interaction, they nodded to the support worker and headed to their room","\n",{"->":"badrs_room.tired_insomnia"},{"#f":1}],"badrs_room":[{"->":".^.tired_insomnia"},{"tired_insomnia":[["^Badr flopped on to their bed, tired but knowing they wouldn't be able to sleep. After a few minutes of rest they decided to...","\n",["ev",{"^->":"badrs_room.tired_insomnia.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^...do their nails. ",{"->":"$r","var":true},null]}],["ev",{"^->":"badrs_room.tired_insomnia.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"take_book"},"/ev",{"*":".^.^.c-1","flg":19},{"s":["^...read the book. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"badrs_room.tired_insomnia.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":".^.^.^.^.do_nails"},"\n",{"#f":5}],"c-1":["ev",{"^->":"badrs_room.tired_insomnia.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":".^.^.^.^.read_book"},"\n",{"#f":5}]}],{"#f":1}],"do_nails":["^After repainting their nails a dark purple Badr finally feels tired enough to sleep. ",{"->":".^.^.fall_asleep"},"\n",{"#f":1}],"read_book":["^Badr reads the book. ",{"->":".^.^.fall_asleep"},"\n",{"#f":1}],"fall_asleep":["^After tossing and turning for thirty minutes Badr finally manages to fall asleep.","\n",{"->":"enter_dreamland"},{"#f":1}],"#f":1}],"enter_dreamland":["^Badr dreams...","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};