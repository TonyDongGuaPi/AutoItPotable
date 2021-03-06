; Write to a Cell using a Loop, after opening a workbook and returning its object identifier.  Then enters Forumulas using _ExcelWriteCell

#include <Excel.au3>
#include <MsgBoxConstants.au3>

Local $oExcel = _ExcelBookNew() ;Create new book, make it visible

For $i = 1 To 20 ;Loop
	_ExcelWriteCell($oExcel, $i, $i, 1) ;Write to the Cell
Next

_ExcelWriteCell($oExcel, "=Average(A:A)", 1, 2) ;Uses A1 referencing, not R1C1
_ExcelWriteCell($oExcel, "=Average(A1:A20)", 1, 3) ;Write formula another way Uses A1 referencing, not R1C1

MsgBox($MB_SYSTEMMODAL, "Exiting", "Press OK to Save File and Exit")
_ExcelBookSaveAs($oExcel, @TempDir & "\Temp.xls", "xls", 0, 1) ; Now we save it into the temp directory; overwrite existing file if necessary
_ExcelBookClose($oExcel) ; And finally we close out
