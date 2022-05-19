-> introducing_psych_ward

== introducing_psych_ward ==
Badr paced the short, dimly lit hallway. Upon reaching the bookcase at the end of the hall they scanned it for the millionth time. Just like all the other times, the choices were disappointing. They'd already read everything that seemed interesting. 

Still, Badr reached out their tattooed arm, running their fingers along the spines of the books. Finally, near the bottom of the bookcase, their hand stopped at a leather bound book with no title on the spine.

* [Take the book] -> take_book
* [Continue pacing] -> more_pacing

== take_book ==
Badr pulled out the book, noting the cracks and discouloration of its leather. Looking at the front the book was merely titled "Tales", with no mention of the author. Badr figured it might keep them busy when they failed to fall asleep later. Turning around, they continued to pace. 
 -> more_pacing

== more_pacing ==
Upon making it back to the sitting area Badr bumped into one of the support workers on night shift. Badr wasn't sure whether or not they'd seen her before.

"Struggling to sleep?" she asked, with a kind smile
"As always" Badr said
"You know the doctor can write you some medication to help with that?" 
"I know" Badr was already tired of this interaction, they nodded to the support worker and headed to their room 
-> badrs_room.tired_insomnia

== badrs_room ==

= tired_insomnia
Badr flopped on to their bed, tired but knowing they wouldn't be able to sleep. After a few minutes of rest they decided to...

* ...do their nails. -> do_nails
* {take_book} ...read the book. -> read_book

= do_nails
TODO: describe what Badr looks like
After repainting their nails a dark purple Badr finally feels tired enough to sleep. -> fall_asleep

= read_book
TODO: some info on what they read 
Badr reads the book. -> fall_asleep

= fall_asleep
After tossing and turning for thirty minutes Badr finally manages to fall asleep. 
-> enter_dreamland

== enter_dreamland ==
Badr dreams...

    -> END
